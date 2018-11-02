import React, { Component } from "react";

import { Container} from "mdbreact";
import FillLogin from '../component/FillLogin';
import Register from '../component/Register';

class LoginContainer extends Component {
  render() {
    return (
      <Container>
        <Register />
        <hr />
        <FillLogin />
      </Container>
    );
  }
}

export default LoginContainer;
