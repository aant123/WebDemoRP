import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Input, Button, Col } from "mdbreact";

class FillLogin extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  onClickSubmitLogin = () => {
    this.props.history.push("/selectIdp");
  };

  componentDidMount = () => {
    if(this.props.isRegis){
      this.setState({ email: this.props.email, password: '000000'})
    }
  }

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
              value={this.state.email}
            />
            <Input 
              label="รหัสผ่าน" 
              icon="lock" 
              type="password" 
              validate
              value={this.state.password}
            />  
            </div>
            <Button 
              block 
              color="primary" 
              onClick={this.onClickSubmitLogin}
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
