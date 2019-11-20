import React from "react";
import classes from "./modal.module.scss";
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => (
  <Aux>
    <Backdrop show={props.show} close={props.close} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translate(0)" : "translate(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default React.memo(modal);
