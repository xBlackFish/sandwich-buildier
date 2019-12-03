import React from "react";
import Modal from "../../components/UI/Modal/Modal";
import Auxillary from "../Auxiliary";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null
      };
      this.reqInterceptor = axios.interceptors.request.use(request => {
        this.setState({ error: null });
        return request;
      });

      this.resInterceptor = axios.interceptors.response.use(
        response => response,
        error => {
          this.setState({ error: error });
        }
      );
    }

    errorConfirmedHandler = () => this.setState({ error: null });

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.request.eject(this.resInterceptor);
    }

    render() {
      return (
        <Auxillary>
          <Modal show={this.state.error} close={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxillary>
      );
    }
  };
};

export default withErrorHandler;
