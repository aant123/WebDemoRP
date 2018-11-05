import React, { Component } from "react";
import { connect } from 'react-redux'
import FillRegister from '../component/FillRegister'

class RegisterContainer extends Component {
  render() {
    const { getId, getEmail, isRegister } = this.props
    return (
      <FillRegister getId={getId} getEmail={getEmail} isRegister={isRegister}/>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getId: (citizenId) => dispatch({ type: 'GET_CITIZEN_ID', citizenId }),
  getEmail: (email) => dispatch({ type: 'GET_EMAIL', email }),
  isRegister: (isRegis) => dispatch({ type: 'IS_REGISTER', isRegis})
})

export default connect(null, mapDispatchToProps)(RegisterContainer);