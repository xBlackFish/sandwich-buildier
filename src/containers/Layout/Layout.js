import React from "react";
import Auxilary from "../../hoc/Auxiliary";
import classes from "./layout.module.scss";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerCloseHandler = () => this.setState({showSideDrawer: false});

  sideDrawerHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer : !prevState.showSideDrawer};
    }) 
  }; 

  render() {
    return (
      <Auxilary>
        <div className={classes.content}>
          <Toolbar drawerToggleClicked={this.sideDrawerHandler}/>
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerCloseHandler}
          />
        </div>
        <main>{this.props.children}</main>
      </Auxilary>
    );
  }
}

export default Layout;
