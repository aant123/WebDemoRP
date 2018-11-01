import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Input, Button, Col } from "mdbreact";

class FillLogin extends Component {
  clickSubmitLogin = () => {
    this.props.history.push("/selectIdp");
  };

  render() {
    return (
      <div>
        <Col style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <form>
            <h5 className="text-left grey-text">มี account อยู่แล้ว</h5>
            <div className="grey-text">
            <Input
              label="ชื่อผู้ใช้งาน หรือ E-mail Address"
              icon="user"
              type="email"
              validate
            />
            <Input 
              label="รหัสผ่าน" 
              icon="lock" 
              type="password" 
              validate 
            />
            </div>
            <Button 
              block 
              color="primary" 
              onClick={this.clickSubmitLogin}
            >
              เข้าสู่ระบบ
            </Button>
          </form>
        </Col>
      </div>
    );
  }
}

export default withRouter(FillLogin);
