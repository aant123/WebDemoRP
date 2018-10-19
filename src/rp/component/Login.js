import React, { Component } from "react";

import { Route, Router } from "react-router-dom";
import ListIdpContrainer from "../contrainer/ListIdpContrainer";
import logo from "../../icon/BFE-Logo.png"

import { Input, Button, Container, Col, Footer } from "mdbreact";

class Login extends Component {
  render() {
    return (
      <div>
        <Container>
          <Col style={{ marginTop: "30px", marginBottom: "50px" }}>
            <Button block color="primary" href='/register'>
              Register
            </Button>
          </Col>
          <hr />
          <Col style={{ marginTop: "30px" }}>
            <form>
              <p className="h5 text-left grey-text">มี account อยู่แล้ว</p>
              <div className="grey-text">
                <Input
                  label="ชื่อผู้ใช้งาน หรือ E-mail Address"
                  icon="user"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <Input
                  label="รหัสผ่าน"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </div>
              <Button block color="primary" href='/selectIdp' onClick={this.clickSubmit}>
                Login
              </Button>
            </form>
          </Col>
        </Container>
      </div>
    );
  }
}

export default Login;
