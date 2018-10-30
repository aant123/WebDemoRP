import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

import { Container, Row, Col, Card, CardBody, CardTitle, Fa, Button } from "mdbreact";

class ClaimStatus extends Component {
  clickSucess = () => {
    this.props.history.push('/');
  };
  render() {
    const { insuranceNo, hospital, currentDateInClaim, isSuccess } = this.props
    const success = isSuccess ? (
        <Col style={{paddingTop:'10px'}}>
          <CardTitle className="card-label">สถานะ</CardTitle>
          <CardTitle
            sub
            className="card-detail"
            style={{ color: "#28B41E", fontWeight: "bold" }}
          >
            อนุมัติ
            </CardTitle>
          <Col className="text-center">
            <Button color='primary' onClick={this.clickSucess}>
              <Fa icon="check" className="mr-1"/>
              ดำเนินการต่อ
            </Button>
          </Col>
        </Col>
      ) : (
        <Col style={{ paddingTop:'10px', paddingBottom:'60px' }}>
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
          <h5 className="text-left grey-text" style={{ marginTop: "30px" }}>
            รายการคำขอเรียกร้องค่ารักษาผ่านโรงพยาบาล
          </h5>
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
                  {currentDateInClaim}
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

export default withRouter(ClaimStatus);
