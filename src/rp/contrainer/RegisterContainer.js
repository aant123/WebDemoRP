import React, { Component } from "react";
import { connect } from 'react-redux'
import FillRegister from '../component/FillRegister'

class RegisterContainer extends Component {
  render() {
    const { getId, getEmail } = this.props
    return (
      <FillRegister getId={getId} getEmail={getEmail}/>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getId: (citizenId) => dispatch({ type: 'GET_CITIZEN_ID', citizenId }),
  getEmail: (email) => dispatch({ type: 'GET_EMAIL', email })
})

export default connect(null, mapDispatchToProps)(RegisterContainer);