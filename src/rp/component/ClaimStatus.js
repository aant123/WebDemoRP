import React, { Component } from "react";

import { Container, Row, Col, Card, CardBody, CardTitle, Fa, Button } from "mdbreact";

class ClaimStatus extends Component {
  clickSucess = () => {
  };
  render() {
    const { insuranceNo, hospital } = this.props
    const isSuccess = true;
    const success = isSuccess ? (
        <Col  style={{paddingTop:'10px'}}>
          <CardTitle className="card-label">สถานะ</CardTitle>
          <CardTitle
            sub
            className="card-detail"
            style={{ color: "#28B41E", fontWeight: "bold" }}
          >
            อนุมัติ
            </CardTitle>
          <Col className="text-center">
            <Button color='primary'>
              <Fa icon="check" className="mr-1" onClick={this.clickSucess} />
              ดำเนินการต่อ
            </Button>
          </Col>
        </Col>
      ) : (
        <Col style={{paddingTop:'10px',paddingBottom:'60px'}}>
          <CardTitle className="card-label">สถานะ</CardTitle>
          <CardTitle
            sub
            className="card-detail"
            style={{ color: "#FF6E00", fontWeight: "bold" }}
          >
            กำลังตรวจสอบ
              </CardTitle>
        </Col>
      )
    return (
      <Container>
        <Col style={{ paddingBottom: "20px" }}>
          <label className="h5 text-left grey-text" style={{ marginTop: "30px" }}>
            รายการคำขอเรียกร้องค่ารักษาผ่านโรงพยาบาล
          </label>
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
                  {hospital}
                </CardTitle>
                <CardTitle className="card-label">วันที่เข้ารักษา</CardTitle>
                <CardTitle sub className="card-detail">
                  12 ตุลาคม 2561
                </CardTitle>
              </Col>
              <Col>
                <CardTitle className="card-label">กรมธรรม์</CardTitle>
                <CardTitle sub className="card-detail">
                  {insuranceNo}
                </CardTitle>
                <CardTitle className="card-label">ค่าใช้จ่าย</CardTitle>
                <CardTitle sub className="card-detail">
                  2,500 บาท
                </CardTitle>
              </Col>
            </Row>
            {success}
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default ClaimStatus;
