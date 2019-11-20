import React from "react";
import classes from "./Logo.module.scss"

import appLogo from "../../files/burger-logo.png";

const logo = props => (
    <div className={classes.Logo}>
        <img src={appLogo} alt="Burger App" height="72" width="72"/>
    </div>
);

export default logo;