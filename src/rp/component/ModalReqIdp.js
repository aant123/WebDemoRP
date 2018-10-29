import React, { Component } from "react";
import { Container, Modal, Fa, ModalBody, Row, Col, Button } from "mdbreact";
import { withRouter } from 'react-router-dom';

class ModalReqIdp extends Component {
  componentWillMount() {
    let data = this.props.objIdpAtSelect
    data = { ...data, requestId: this.props.requestId }
    this.props.reqToIdp(data);
  }
  clickSucess = () => {
    this.props.history.push('/fillUserInfo');
    this.props.sucessModal(true);
  };
  render() {
    const { showLoading, requestId, currentDate } = this.props;
    const textDetailSucess =
      "ระบบได้รับการยืนยันและข้อมูลจาก \n “ตัวตน Idp แล้ว” ";
    const textDetailWaiting =
      "ระบบได้ทำการส่งคำร้องขอยืนยันตัวตนและการเข้าถึงข้อมูลไปที่ “ตัวตน Idp” แล้วกรุณาเปิด Appliction ของ “ตัวตน Idp” เพื่อทำการยืนยันคำร้อง";
    const modalDetail = showLoading ? (
      <div>
        <Row style={{ marginBottom: '30px', marginTop: '10px' }}>
          <label className="card-label" style={{ fontSize: '1rem' }}>
            {textDetailWaiting}
          </label>
        </Row>
        <Row className="blue-text" style={{ justifyContent: "center" }}>
          <Fa icon="spinner" pulse size="4x" fixed />
          <span className="sr-only">Loading...</span>
        </Row>
      </div>
    ) : (
        <div>
          <Row style={{ marginTop: '10px', marginBottom: '30px' }}>
            <label className="card-label" style={{ fontSize: '1.1rem', color: '#289123', fontWeight: 'bold' }}>
              {textDetailSucess}
            </label>
          </Row>
          <Row className="green-text" style={{ justifyContent: "center" }}>
            <Button color='primary'>
              <Fa icon="check" className="mr-1" onClick={this.clickSucess} />
              ดำเนินการต่อ
            </Button>
          </Row>
        </div>
      );
    return (
      <Container>
        <Modal isOpen={true} toggle={true} centered>
          <ModalBody style={{ marginTop: '10px', marginBottom: '10px', marginLeft: '10px', marginRight: '10px' }}>
            <Col>
              <Row>
                <label className="card-label" style={{ fontSize: '1.5rem' }}>ยืนยันตัวตน</label>
              </Row>
              <Row>
                <label className="card-label">Reference ID</label>
              </Row>
              <Row>
                <label className="card-detail">{requestId}</label>
              </Row>
              <Row>
                <label className="card-label">Request Time</label>
              </Row>
              <Row>
                <label className="card-detail">{currentDate}</label>
              </Row>
              {modalDetail}
            </Col>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

export default withRouter(ModalReqIdp);
