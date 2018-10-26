import React, { Component } from 'react';
import { connect } from 'react-redux'
import ClaimStatus from '../component/ClaimStatus';

class ClaimStatusContainer extends Component {
  render() {
    const { insuranceNo, hospital, currentDateInClaim, isSuccess } = this.props
    return (
      <ClaimStatus
        insuranceNo={insuranceNo}
        hospital={hospital}
        currentDateInClaim = {currentDateInClaim}
        isSuccess = {isSuccess}
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

export default connect(mapStateToProps)(ClaimStatusContainer);