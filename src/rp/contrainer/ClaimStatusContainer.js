import React, { Component } from 'react';
import { connect } from 'react-redux'
import ClaimStatus from '../component/ClaimStatus';

class ClaimStatusContainer extends Component {
  render() {
    const { insuranceNo, hospital } = this.props
    return (
      <ClaimStatus insuranceNo={insuranceNo} hospital={hospital}/>
    )
  }
}

const mapStateToProps = state => ({
  insuranceNo: state.insuranceNo,
  hospital: state.hospital,
  currentDate: state.currentDate
})

export default connect(mapStateToProps)(ClaimStatusContainer);