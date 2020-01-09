import React from "react";

import classes from "./Order.module.scss";

const order = props => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientsOutput = ingredients.map(i => {
    return (
      <span className={classes.Ingredient} key={i.name}>
        {i.name} ({i.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Date: {props.date}</p>
      <p>Ingredients: {ingredientsOutput}</p>
      <p>Price: {Number.parseFloat(props.price).toFixed(2)}</p>
    </div>
  );
};

export default order;
