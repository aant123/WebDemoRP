import React, { Component } from "react";

import { Route, Router } from "react-router-dom";
import ListIdpContrainer from "../contrainer/ListIdpContrainer";
import Header from "./Header";

import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Fa,
} from "mdbreact";

class ClaimStatus extends Component {
  clickSubmit = () => {
    // window.location = '/ListIdp'
    // console.log('window.location',window.location);
  };
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Col style={{ marginTop: "30px", marginBottom: "30px" }}>
            <p className="h2 text-left dark-blue">Fax Claim Service</p>
            <p className="h5 text-left grey-text" style={{ marginTop: "30px" }}>
              รายการคำขอเรียกร้องค่ารักษาผ่านโรงพยาบาล
            </p>
          </Col>
          <Card
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              marginBottom: "20px",
              background: "#F0F0F5"
            }}
          >
            <CardBody>
              <Row style={{ marginBottom: '10px' }}>
                <Col>
                  <CardTitle className="card-label">
                    Fax Claim No.
                  </CardTitle>
                  <CardTitle sub className="card-detail">
                    65-2018-0001415
                  </CardTitle>
                  <CardTitle className="card-label">
                    โรงพยาบาล
                  </CardTitle>
                  <CardTitle sub className="card-detail">
                    โรงพยาบาลดุสิต
                  </CardTitle>
                  <CardTitle className="card-label">
                    วันที่เข้ารักษา
                  </CardTitle>
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
              <CardTitle sub className="card-detail-bold" style={{ color: '#FF6E00' }}>
                กำลังตรวจสอบ
              </CardTitle>
              <Col className='text-center'>
                <Fa icon='check-circle' size='5x' 
                  style={{ color: '#28B41E' }} 
                  onClick={this.clickSucess}
                />
              </Col>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default ClaimStatus;
