import React from "react";
import Sandwich from "../../Sandwich/Sandwich";
import Button from "../../UI/Button/Button";

import classes from './CheckoutSummary.module.scss'

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <div className={classes.Sandwich}>
        <Sandwich ingredients={props.ingredients} />
      </div>
      <Button type="Danger" clicked={props.onCheckoutCancelled}>Cancel</Button>
      <Button type="Success" clicked={props.onCheckoutProceeded}>Continue</Button>
    </div>
  );
};

export default checkoutSummary;
    