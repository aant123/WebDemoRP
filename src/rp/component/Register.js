import React, { Component } from "react";

import { Route, Router } from "react-router-dom";
import ListIdpContrainer from "../contrainer/ListIdpContrainer";
import Header from "./Header"

import { Input, Button, Container, Col, Footer, Fa } from "mdbreact";

class Register extends Component {
  clickSubmit = () => {
    // window.location = '/ListIdp'
    console.log('window.location',window.location);
  };
  render() {
    return (
      <div>
        <Container>
          <Col style={{ marginTop: "30px", marginBottom: "50px" }}>
            <form style={{ marginTop: "50px" }}>
              <div className="grey-text">
                <Input
                  label="เลขที่บัตรประชาชน"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <Input
                  label="E-mail Address"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                
                <div className="md-form form-group">
                  <Fa icon="lock" className="prefix" />
                  <div style={{position:"absolute", right:'1rem', bottom:'1rem'}}>
                    <Fa icon="sort-down" size='lg' />
                  </div>
                  <select
                    className="form-control validate dropdown grey-text"
                    required
                  >
                    <option value="">เลือกวิธียืนยันตัวตน</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                
              </div>
              <Button block color="primary" href='/' onClick={this.clickSubmit}>
                ดำเนินการต่อ
              </Button>
            </form>
          </Col>
        </Container>
      </div>
    );
  }
}

export default Register;
