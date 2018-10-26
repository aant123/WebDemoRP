import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import * as moment from 'moment';
import 'moment/min/locales.min';
import { Input, Button, Container, Col, Fa } from "mdbreact";

class FillClaimInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insuranceNo: 0,
      hospital: ''
    }
  }
  clickSubmit = () => {
    if(this.state.insuranceNo !== 0 && this.state.hospital !== '') {
      moment.locale('th')
      const currentDateInClaim = moment().format('LL');
      this.props.getInfo(this.state.insuranceNo, this.state.hospital, currentDateInClaim);
      this.props.reqtoAs();
      this.props.history.push('/claimStatus');
    }
  };
  insuranceSelected = (event) => {
    this.setState({ insuranceNo: event.target.value })
  }
  hospitalSelected = (event) => {
    this.setState({ hospital: event.target.value })
  }
  render() {
    return (
      <Container>
        <Col style={{ paddingBottom: "20px" }}>
          <label className="h5 text-left grey-text" style={{ marginTop: "30px" }}>
            ข้อมูลของการรักษาพยาบาลในครั้งนี้
          </label>
        </Col>
        <Col style={{ paddingBottom: "30px" }}>
          <form>
            <div className="grey-text">
              <div className="md-form form-group">
                <Fa icon="tags" className="prefix" />
                <div style={{ position: "absolute", right: '1rem', bottom: '1rem' }}>
                  <Fa icon="sort-down" size='lg' />
                </div>
                <select
                  className="form-control validate dropdown"
                  required onChange={this.insuranceSelected}
                >
                  <option value="" disabled selected>เลขที่กรมธรรม์</option>
                  <option value="000000J789-456">000000J789-456</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="md-form form-group">
                <Fa icon="h-square" className="prefix" />
                <div style={{ position: "absolute", right: '1rem', bottom: '1rem' }}>
                  <Fa icon="sort-down" size='lg' />
                </div>
                <select
                  className="form-control validate dropdown"
                  required onChange={this.hospitalSelected}
                >
                  <option value="" disabled selected>โรงพยาบาล</option>
                  <option value="โรงพยาบาลดุสิต">โรงพยาบาลดุสิต</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

              </div>
              <Input
                icon="folder"
                group
                type="file"
                validate
                className="dropdown grey-text"
              />
            </div>
            <Button block color="primary" onClick={this.clickSubmit}>
              ดำเนินการต่อ
              </Button>
          </form>
        </Col>
      </Container>
    );
  }
}

export default withRouter(FillClaimInfo);
