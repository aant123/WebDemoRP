import React, { Component } from "react";
import { connect } from "react-redux";

import { Container} from "mdbreact";
import FillLogin from '../component/FillLogin';
import Register from '../component/Register';

class LoginContainer extends Component {
  render() {
    const { email, isRegis } = this.props;
    return (
      <Container>
        <Register />
        <hr />
        <FillLogin email={email} isRegis={isRegis}/>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  email: state.email,
  isRegis: state.isRegis
});
export default connect(mapStateToProps)(LoginContainer);
