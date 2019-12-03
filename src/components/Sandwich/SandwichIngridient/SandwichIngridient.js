import React from "react";
import PropTypes from "prop-types";
import classes from "./sandwichIngridient.module.scss";

class SandwichIngridient extends React.Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case "beef":
        ingredient = <div className={classes.Beef}></div>;
        break;
      case "chicken":
        ingredient = <div className={classes.Chicken}></div>;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case "salad":
        ingredient = <div className={classes.Salad}></div>;
        break;
      case "bacon":
        ingredient = <div className={classes.Bacon}></div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

SandwichIngridient.propTypes = {
  type: PropTypes.string.isRequired
};

export default SandwichIngridient;
