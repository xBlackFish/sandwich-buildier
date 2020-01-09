import React from "react";
import Button from "./../../../components/UI/Button/Button";
import axios from "../../../axiosConfig";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.module.scss";

class ContactData extends React.Component {
  state = {
    name: "",
    email: "",
    adress: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });

    const order = {
      ingredients: this.props.ingredients,
      totalPrice: this.props.price,
      date: new Date().toLocaleString(),
      customer: {
        name: "Joe Doe",
        adress: {
          street: "Green Street 123"
        },
        email: "test@test.pl"
      }
    };

    axios
      .post("/orders.json", order)
      .then(res => {
        this.setState({ loading: false });
        this.props.history.push('/');
    
      })
      .catch(e => {
        this.setState({ loading: false });
        console.log(e);
      });
  };

  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="your name" />
        <input type="text" name="email" placeholder="your email" />
        <input type="text" name="street" placeholder="street" />
        <input type="text" name="postalCode" placeholder="postal code " />
        <Button type="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter delivery data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
