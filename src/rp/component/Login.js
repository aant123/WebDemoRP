import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

import { Input, Button, Container, Col } from "mdbreact";

class Login extends Component {
  clickSubmitRegister = () => {
    this.props.history.push('/register');
  };
  clickSubmitLogin = () => {
    // this.props.history.push('/selectIdp');
  };
  render() {
    return (
      <Container>
        <Col style={{ paddingBottom: "20px" }}>
          <label className="h5 text-left grey-text" style={{ marginTop: "30px" }}>
            ผู้ใช้งานใหม่ หรือยังไม่เคยลงทะเบียน online
          </label>
        </Col>
        <Col style={{ paddingBottom: "20px" }}>
          <Button block color="primary" onClick={this.clickSubmitRegister}>
            ลงทะเบียนเข้าใช้งาน
          </Button>
        </Col>
        <hr />
        <Col style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <form>
            <label className="h5 text-left grey-text">มี account อยู่แล้ว</label>
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
            <Button block color="primary" 
            href='/selectIdp' 
            onClick={this.clickSubmitLogin}>
              เข้าสู่ระบบ
              </Button>
          </form>
        </Col>
      </Container>
    );
  }
}

export default withRouter(Login);
