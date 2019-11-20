import React from "react";
import Control from "./Control/Control";
import PricePrinter from "./PricePrinter/PricePrinter";
import classes from "./buildControls.module.scss";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" }
];

const buildControl = props => (
  <div className={classes.buildControls}>
    {controls.map(el => (
      <Control
        amount={props.ingredients[el.type]}
        type={el.type}
        key={el.label}
        label={el.label}
        add={() => props.handleAdd(el.type)}
        remove={() => props.handleRemove(el.type)}
      />
    ))}
    <PricePrinter price={props.totalPrice.toFixed(2)} />
    <button onClick={props.proceedWithOrder} disabled={!props.purchaseable} className={classes.orderButton}>Order now</button>
  </div>
);

export default buildControl;
