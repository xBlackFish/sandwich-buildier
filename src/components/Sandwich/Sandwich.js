import React from "react";
import classes from "./sandwich.module.scss";
import MealIngridient from "./SandwichIngridient/SandwichIngridient";

const sandwich = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(el => {
    return [...Array(props.ingredients[el])]
      .map((_, i) => <MealIngridient key={el + i} type={el} />)
      .reduce((arr, el) => arr.concat(el), []);
  });

  return (
    <div className={classes.sandwich}>
      <MealIngridient type="bread-top" />
      {transformedIngredients}
      <MealIngridient type="bread-bottom" />
    </div>
  );
};

export default sandwich;
