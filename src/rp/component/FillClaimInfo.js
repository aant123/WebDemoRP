import React, { Component } from "react";

import { Route, Router } from "react-router-dom";
import ListIdpContrainer from "../contrainer/ListIdpContrainer";
import Header from "./Header"

import { Input, Button, Container, Col, Footer, Fa } from "mdbreact";

class FillClaimInfo extends Component {
  clickSubmit = () => {
    // window.location = '/ListIdp'
    // console.log('window.location',window.location);
  };
  render() {
    return (
      <div>
        <Header/>
        <Container>
          <Col style={{ marginTop: "30px", marginBottom: "50px" }}>
            <p className="h2 text-left dark-blue">Fax Claim Service</p>
            <p className="h5 text-left grey-text" style={{ marginTop: "30px" }}>
              ลงทะเบียนเข้าใช้งาน
            </p>
            <form style={{ marginTop: "50px" }}>
              <div className="grey-text">
                <div className="md-form form-group">
                  <Fa icon="tags" className="prefix" />
                  <div style={{position:"absolute", right:'1rem', bottom:'1rem'}}>
                    <Fa icon="sort-down" size='lg' />
                  </div>
                  <select
                    className="form-control validate dropdown grey-text"
                    required
                  >
                    <option value="">เลขที่กรมธรรม์</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="md-form form-group">
                  <Fa icon="h-square" className="prefix" />
                  <div style={{position:"absolute", right:'1rem', bottom:'1rem'}}>
                    <Fa icon="sort-down" size='lg' />
                  </div>
                  <select
                    className="form-control validate dropdown grey-text"
                    required
                  >
                    <option value="">โรงพยาบาล</option>
                    <option value="1">One</option>
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
              <Button block color="primary">
                ดำเนินการต่อ
              </Button>
            </form>
          </Col>
        </Container>
      </div>
    );
  }
}

export default FillClaimInfo;
