import React, { Component } from "react";
import { connect } from 'react-redux'
import FillRegister from '../component/FillRegister'

class RegisterContainer extends Component {
  render() {
    const { getId } = this.props
    return (
      <FillRegister getId={getId}/>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getId: (citizenId) => dispatch({ type: 'GET_CITIZEN_ID', citizenId })
})

export default connect(null, mapDispatchToProps)(RegisterContainer);