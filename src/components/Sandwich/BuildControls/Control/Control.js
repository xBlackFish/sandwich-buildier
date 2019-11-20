import React from "react";
import classes from "./control.module.scss";

const control = props => (
  <div className={classes.control}>
    <div className={classes.label}>{`${props.label} : ${props.amount}`}</div>
    <button onClick={props.add} className={classes.button}>
      +
    </button>
    <button
      className={classes.button}
      onClick={props.remove}
      disabled={props.amount === 0}
    >
      -
    </button>
  </div>
);

export default control;
