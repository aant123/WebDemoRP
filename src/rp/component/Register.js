import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

import { Button, Col } from "mdbreact";

class Login extends Component {
  
  clickSubmitRegister = () => {
    this.props.history.push('/register');
  };

  render() {
    return (
      <div>
        <Col style={{ paddingBottom: "20px" }}>
          <h5 className="h5 text-left grey-text" style={{ marginTop: "30px" }}>
            ผู้ใช้งานใหม่ หรือยังไม่เคยลงทะเบียน online
          </h5>
        </Col>
        <Col style={{ paddingBottom: "20px" }}>
          <Button block color="primary" onClick={this.clickSubmitRegister}>
            ลงทะเบียนเข้าใช้งาน
          </Button>
        </Col>
      </div>
    );
  }
}

export default withRouter(Login);
