import React from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends React.Component {

  shouldComponentUpdate() {
    
  };

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(k => (
      <li key={k}>
        <span>{k}</span>:{this.props.ingredients[k]}
      </li>
    ));
    return (
      <Aux>
        <h1>You order</h1>
        <p>Ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>Total price: {this.props.totalPrice.toFixed(2)}$</p>
        <p>Continue to checkout?</p>
        <Button clicked={this.props.purchaseCancelled} type="Danger">
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinued} type="Success">
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
