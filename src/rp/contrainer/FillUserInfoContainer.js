import React, { Component } from "react";
import { connect } from "react-redux";
import FillUserInfo from "../component/FillUserInfo";

class ClaimStatusContainer extends Component {
  render() {
    const { citizenId, email } = this.props;
    return <FillUserInfo citizenId={citizenId} email={email} />;
  }
}

const mapStateToProps = state => ({
  citizenId: state.citizenId,
  email: state.email
});

export default connect(mapStateToProps)(ClaimStatusContainer);
