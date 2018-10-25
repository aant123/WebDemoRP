import React, { Component } from "react";

import { Input, Button, Container, Col } from "mdbreact";

class Login extends Component {
  render() {
    return (
      <Container>
        <Col style={{ paddingBottom: "20px" }}>
          <p className="h5 text-left grey-text" style={{ marginTop: "30px" }}>
            ผู้ใช้งานใหม่ หรือยังไม่เคยลงทะเบียน online
          </p>
        </Col>
        <Col style={{ paddingBottom: "20px" }}>
          <Button block color="primary" href='/register'>
            ลงทะเบียนเข้าใช้งาน
          </Button>
        </Col>
        <hr />
        <Col style={{ paddingTop: "20px", paddingBottom: "20px" }}>
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
              เข้าสู่ระบบ
              </Button>
          </form>
        </Col>
      </Container>
    );
  }
}

export default Login;
