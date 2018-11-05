import React, { Component } from "react";
import { Input, Button, Container, Row, Col } from "mdbreact";
import { withRouter } from 'react-router-dom'

class FillUserInfo extends Component {
  clickSubmit = () => {
    this.props.history.push('/fillClaimInfo');
  };
  render() {
    const{ citizenId, email } = this.props;
    return (
      <Container>
        <Col>
          <h5 className="text-left grey-text" style={{ marginTop: "30px" }}>
            ข้อมูลผู้ใช้
          </h5>
        </Col>
        <Col style={{ paddingBottom: "30px" }}>
          <form>
            <div className="grey-text">
              <Row>
                <Col>
                  <Input
                    label="ชื่อ"
                    icon="user"
                    type="text"
                    value={'วิจิตตรา'}
                  />
                </Col>
                <Col>
                  <Input
                    label="นามสกุล"
                    type="text"
                    value={'โค'}
                  />
                </Col>
              </Row>

              <Input
                label="เลขที่บัตรประชาชน"
                icon="id-card"
                type="text"
                validate
                value={citizenId}
              />
              <Input
                label="วันเกิด"
                icon="calendar"
                type="text"
                validate
                value={'2/12/95'}
              />
              <Input
                label="ที่อยู่"
                icon="map-marker"
                type="text"
                validate
                value={'123/456'}
              />
              <Input
                label="เบอร์โทรศัพท์"
                icon="phone"
                type="text"
                validate
                value={'0123456789'}
              />
              <Input
                label="E-mail Address"
                icon="envelope"
                type="email"
                validate
                value={email}
              />
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

export default withRouter(FillUserInfo);
