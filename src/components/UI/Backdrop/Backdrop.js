import React from "react";
import classes from "./backdrop.module.scss";

const backdrop = props =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.close}></div>
  ) : null;

export default backdrop;
