import React from "react";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.scss";

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default navigationItems;