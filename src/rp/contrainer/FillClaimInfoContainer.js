import React, { Component } from 'react';
import { connect } from 'react-redux'
import FillClaimInfo from '../component/FillClaimInfo';

class FillClaimInfoContainer extends Component {
  render() {
    const { getInfo } = this.props
    return(
      <FillClaimInfo
        getInfo={getInfo}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getInfo : (insuranceNo, hospital) => dispatch({type:'GET_CLAIM_INFO', insuranceNo, hospital}),
  })

export default connect (null, mapDispatchToProps)(FillClaimInfoContainer);