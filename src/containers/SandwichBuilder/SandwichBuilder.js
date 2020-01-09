import React from "react";
import Sandwich from "../../components/Sandwich/Sandwich";
import BuildControls from "../../components/Sandwich/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Sandwich/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axiosConfig";
import Auxiliary from "../../hoc/Auxiliary";

const PRICES = { salad: 0.5, cheese: 1, beef: 2, chicken: 2, bacon: 1 };

class SandwichBuilder extends React.Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios
      .get("ingredients.json")
      .then(res => this.setState({ ingredients: res.data }))
      .catch(e => this.setState({error: true}));
  }

  purchaseHandler = () => this.setState({ purchasing: true });

  purchaseCancelHandler = () => this.setState({ purchasing: false });

  purchaseContinueHandler = () => {

    const queryParams = [];
    for(let i in this.state.ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    }

    queryParams.push('price=' + this.state.totalPrice)
    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(el => ingredients[el])
      .reduce((sum, el) => sum + el, 0);

    this.setState({ purchaseable: sum > 0 });
  }

  addIngredientHandler = type => {
    let updatedingredients = { ...this.state.ingredients };
    updatedingredients[type] = updatedingredients[type] + 1;

    this.setState(prevState => ({
      ingredients: { ...updatedingredients },
      totalPrice: prevState.totalPrice + PRICES[type]
    }));

    this.updatePurchaseState(updatedingredients);
  };

  removeIngredientHandler = type => {
    let updatedingredients = { ...this.state.ingredients };
    updatedingredients[type] = updatedingredients[type] - 1;

    this.setState(prevState => ({
      ingredients: { ...updatedingredients },
      totalPrice: prevState.totalPrice - PRICES[type]
    }));

    this.updatePurchaseState(updatedingredients);
  };

  render() {
    let orderSummary = null;
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    let sandwich = this.state.error ? <p>Cannot connect with the server</p> : <Spinner />;

    if (this.state.ingredients) {
      sandwich = (
        <Auxiliary>
          <Sandwich ingredients={this.state.ingredients} />
          <BuildControls
            ingredients={this.state.ingredients}
            handleAdd={this.addIngredientHandler}
            handleRemove={this.removeIngredientHandler}
            totalPrice={this.state.totalPrice}
            proceedWithOrder={this.purchaseHandler}
            purchaseable={this.state.purchaseable}
          />
        </Auxiliary>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          totalPrice={this.state.totalPrice}
          purchaseContinued={this.purchaseContinueHandler}
          purchaseCancelled={this.purchaseCancelHandler}
        />
      );
    }

    return (
      <>
        <Modal show={this.state.purchasing} close={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {sandwich}
      </>
    );
  }
}

export default withErrorHandler(SandwichBuilder, axios);
