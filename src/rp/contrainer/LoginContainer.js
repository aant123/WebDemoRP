import React, { Component } from "react";

import { Button, Container, Col } from "mdbreact";
import FillLogin from '../component/FillLogin';
import FillRegister from '../component/FillRegister';

class LoginContainer extends Component {
  render() {
    return (
      <Container>
        <FillRegister />
        <hr />
        <FillLogin />
      </Container>
    );
  }
}

export default LoginContainer;
