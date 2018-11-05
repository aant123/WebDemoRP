import React, { Component } from 'react';
import { connect } from 'react-redux'
import ClaimStatus from '../component/ClaimStatus';

class ClaimStatusContainer extends Component {
  render() {
    const { insuranceNo, hospital, currentDateInClaim, isSuccess, isRegister } = this.props
    return (
      <ClaimStatus
        insuranceNo={insuranceNo}
        hospital={hospital}
        currentDateInClaim = {currentDateInClaim}
        isSuccess = {isSuccess}
        isRegister={isRegister}
      />
    )
  }
}

const mapStateToProps = state => ({
  insuranceNo: state.insuranceNo,
  hospital: state.hospital,
  currentDateInClaim: state.currentDateInClaim,
  isSuccess: state.isSuccess
})

const mapDispatchToProps = dispatch => ({
  isRegister: (isRegis) => dispatch({ type: 'IS_REGISTER', isRegis})
})

export default connect(mapStateToProps, mapDispatchToProps)(ClaimStatusContainer);