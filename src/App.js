import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./containers/Layout/Layout";
import SandwichBuilder from "./containers/SandwichBuilder/SandwichBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
// import classes from './App.module.scss';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="" component={SandwichBuilder} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
