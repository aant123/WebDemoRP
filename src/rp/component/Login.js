import React, { Component } from "react";

import { Route, Router } from "react-router-dom";
import ListIdpContrainer from "../contrainer/ListIdpContrainer";
import logo from "../../icon/BFE-Logo.png"

import { Input, Button, Container, Col, Footer } from "mdbreact";

class Login extends Component {
  clickSubmit = () => {
    // window.location = '/ListIdp'
    // console.log('window.location',window.location);
  };
  render() {
    return (
      <div>
        <Footer className="footer">
          <Container>
            <img src={logo} alt='logo' className="mx-auto d-block" 
            style={{ paddingTop: '10px', paddingBottom: '10px'}}
            />
          </Container>
        </Footer>
        <Container>
          <Col style={{ marginTop: "30px", marginBottom: "50px" }}>
            <p
              className="h2 text-left dark-blue"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              Fax Claim Service
            </p>
            <p className="h5 text-left grey-text">
              ผู้ใช้งานใหม่ หรือยังไม่เคยลงทะเบียน online
            </p>
            <Button block color="primary">
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
              <Button block color="primary">
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
