import React, { Component } from "react";
import { Input, Button, Container, Row, Col, Footer } from "mdbreact";

class FillUserInfo extends Component {
  clickSubmit = () => {
    this.props.history.push('/fillClaimInfo');
  };
  render() {
    return (
      <Container>
        <Col>
          <p className="h5 text-left grey-text" style={{ marginTop: "30px" }}>
            ข้อมูลผู้ใช้
          </p>
        </Col>
        <Col style={{ paddingBottom: "30px" }}>
          <form>
            <div className="grey-text">
              <Row>
                <Col>
                  <Input
                    label="ชื่อ"
                    icon="user"
                    group
                    type="text"
                    error="wrong"
                    success="right"
                  />
                </Col>
                <Col>
                  <Input
                    label="นามสกุล"
                    group
                    type="text"
                    error="wrong"
                    success="right"
                  />
                </Col>
              </Row>

              <Input
                label="เลขที่บัตรประชาชน"
                icon="id-card"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <Input
                label="วันที่"
                icon="calendar"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <Input
                label="ที่อยู่"
                icon="map-marker"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <Input
                label="เบอร์โทรศัพท์"
                icon="phone"
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

export default FillUserInfo;
