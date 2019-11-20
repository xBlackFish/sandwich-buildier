import React from "react";
import classes from "./pricePrinter.module.scss";

const pricePrinter = props => <div className={classes.pricePrinter}>{`Total price: ${props.price}$`}</div>;

export default pricePrinter;
