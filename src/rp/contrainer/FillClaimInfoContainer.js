import React, { Component } from 'react';
import { connect } from 'react-redux'
import FillClaimInfo from '../component/FillClaimInfo';

class FillClaimInfoContainer extends Component {
  render() {
    const { getInfo, reqtoAs} = this.props
    return(
      <FillClaimInfo
        getInfo={getInfo}
        reqtoAs={reqtoAs}
      />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getInfo : (insuranceNo, hospital, currentDateInClaim) => dispatch({type:'GET_CLAIM_INFO', insuranceNo, hospital, currentDateInClaim}),
  reqtoAs : () => dispatch({type:'WAIT_ACCEPT_FROM_AS'})
  })

export default connect (null, mapDispatchToProps)(FillClaimInfoContainer);