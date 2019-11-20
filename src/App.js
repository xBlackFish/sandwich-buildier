import React from "react";
import Layout from "./containers/Layout/Layout";
import SandwichBuilder from "./containers/SandwichBuilder/SandwichBuilder";
// import classes from './App.module.scss';

function App() {
  return (
    <div>
      <Layout>
        <SandwichBuilder />
      </Layout>
    </div>
  );
}

export default App;
