import React from "react";
import classes from "./backdrop.module.scss";

const backdrop = props =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.close}></div>
  ) : null;

export default backdrop;

const users = [  
  {id: 'a1', email: 'abc@xyz', name: 'Abc'},
  {id: 'b2', email: 'def@xyz', name: 'Def'},
  {id: 'c3', email: 'ghi@xyz', name: 'Ghi'},
  {id: 'd4', email: 'jkl@xyz', name: 'Jkl'},
]

users.reduce((acc, curr) => ({...acc, ...{[curr.name]: curr.email}}), {})
