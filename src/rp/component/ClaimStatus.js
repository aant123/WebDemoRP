import React, { Component } from "react";

import { Container, Row, Col, Card, CardBody, CardTitle, Fa } from "mdbreact";

class ClaimStatus extends Component {
  clickSubmit = () => {
    // window.location = '/ListIdp'
    // console.log('window.location',window.location);
  };
  render() {
    return (
      <Container>
        <Col style={{ paddingBottom: "20px" }}>
          <p className="h5 text-left grey-text" style={{ marginTop: "30px" }}>
            รายการคำขอเรียกร้องค่ารักษาผ่านโรงพยาบาล
          </p>
        </Col>
        <Card
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            marginBottom: "30px",
            background: "#F0F0F5"
          }}
        >
          <CardBody>
            <Row style={{ paddingTop: "10px", paddingBottom: "10px" }}>
              <Col>
                <CardTitle className="card-label">Fax Claim No.</CardTitle>
                <CardTitle sub className="card-detail">
                  65-2018-0001415
                </CardTitle>
                <CardTitle className="card-label">โรงพยาบาล</CardTitle>
                <CardTitle sub className="card-detail">
                  โรงพยาบาลดุสิต
                </CardTitle>
                <CardTitle className="card-label">วันที่เข้ารักษา</CardTitle>
                <CardTitle sub className="card-detail">
                  12 ตุลาคม 2561
                </CardTitle>
              </Col>
              <Col>
                <CardTitle className="card-label">กรมธรรม์</CardTitle>
                <CardTitle sub className="card-detail">
                  000000J789-456
                </CardTitle>
                <CardTitle className="card-label">ค่าใช้จ่าย</CardTitle>
                <CardTitle sub className="card-detail">
                  2,500 บาท
                </CardTitle>
              </Col>
            </Row>
            <CardTitle className="card-label">สถานะ</CardTitle>
            <CardTitle
              sub
              className="card-detail"
              style={{ color: "#FF6E00", fontWeight: "bold" }}
            >
              กำลังตรวจสอบ
            </CardTitle>
            <Col className="text-center">
              <Fa
                icon="check-circle"
                size="5x"
                style={{ color: "#28B41E" }}
                onClick={this.clickSucess}
              />
            </Col>
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default ClaimStatus;
