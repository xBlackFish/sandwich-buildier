import React from "react";
import Sandwich from "../../components/Sandwich/Sandwich";
import BuildControls from "../../components/Sandwich/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Sandwich/OrderSummary/OrderSummary";

const PRICES = { salad: 0.5, cheese: 1, meat: 2, bacon: 1 };

class SandwichBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
  };

  purchaseHandler = () => this.setState({ purchasing: true });

  purchaseCancelHandler = () => this.setState({ purchasing: false });

  purchaseContinueHandler = () => alert("Ordered");

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
    return (
      <>
        <Modal show={this.state.purchasing} close={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
            purchaseContinued={this.purchaseContinueHandler}
            purchaseCancelled={this.purchaseCancelHandler}
          />
        </Modal>
        <Sandwich ingredients={this.state.ingredients} />
        <BuildControls
          ingredients={this.state.ingredients}
          handleAdd={this.addIngredientHandler}
          handleRemove={this.removeIngredientHandler}
          totalPrice={this.state.totalPrice}
          proceedWithOrder={this.purchaseHandler}
          purchaseable={this.state.purchaseable}
        />
      </>
    );
  }
}

export default SandwichBuilder;
