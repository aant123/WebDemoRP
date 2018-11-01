import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

import { Input, Button, Container, Col, Fa } from "mdbreact";

class FillRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citizenId: '',
      email: ''
    }
  }

  clickSubmit = () => {
    this.props.getId(this.state.citizenId)
    this.props.getEmail(this.state.email)
    this.props.history.push('/');
  };
  onChangeId = (event) => {
    this.setState({ citizenId: event.target.value })
  }
  onChangeEmail = (event) => {
    this.setState({ email: event.target.value })
  }
  render() {
    return (
      <Container>
        <Col style={{ paddingBottom: "20px" }}>
          <h5 className="text-left grey-text" style={{ marginTop: "30px" }}>
            ลงทะเบียนผู้ใช้งาน
          </h5>
        </Col>
        <Col style={{ paddingBottom: "30px" }}>
          <form>
            <div className="grey-text">
              <Input
                label="เลขที่บัตรประชาชน"
                icon="user"
                type="number"
                validate
                value={this.state.citizenId}
                onChange={this.onChangeId}
              />
              <Input
                label="E-mail Address"
                icon="envelope"
                type="email"
                validate
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
              <div className="md-form form-group">
                <Fa icon="lock" className="prefix" />
                <div style={{ position: "absolute", right: '1rem', bottom: '1rem' }}>
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
            <Button block color="primary" onClick={this.clickSubmit}>
              ดำเนินการต่อ
            </Button>
          </form>
        </Col>
      </Container>
    );
  }
}

export default withRouter(FillRegister);
