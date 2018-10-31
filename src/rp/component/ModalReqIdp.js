import React, { Component } from "react";
import { Container, Modal, Fa, ModalBody, Row, Col, Button } from "mdbreact";
import { withRouter } from 'react-router-dom';
import {requestStatus} from '../configCondition';

class ModalReqIdp extends Component {
  componentWillMount() {
    let data = this.props.objIdpAtSelect
    data = { ...data, requestId: this.props.requestId }
    this.props.reqToIdp(data);
  }
  
  onClickSuccess = () => {
    this.props.history.push('/fillUserInfo');
    this.props.sucessModal(true);
  };
  
  onClickBack = () => {
    this.props.history.push('/selectIdp');
    this.props.sucessModal(true);
  };

  modalDetailRender = (status) => {
    switch(status){
      case requestStatus.COMPLETED:
        return (
          <div>
            <Row style={{ marginTop: '10px', marginBottom: '30px' }}>
              <label className="card-label" style={{ fontSize: '1.1rem', color: '#289123', fontWeight: 'bold' }}>
                ระบบได้รับการยืนยันและข้อมูลจาก “ตัวตน Idp แล้ว”
              </label>
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <Button color='primary' onClick={this.onClickSuccess}>
                <Fa icon="check" className="mr-1"/>
                ดำเนินการต่อ
              </Button>
            </Row>
          </div>
        )
      case requestStatus.REJECTED :
        return (
          <div>
            <Row style={{ marginTop: '10px', marginBottom: '30px' }}>
              <label className="card-label" style={{ fontSize: '1.1rem', color: '#ff0000', fontWeight: 'bold' }}>
                คำร้องขอถูกปฎิเสธ
              </label>
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <Button color='red' onClick={this.onClickBack}>
                <Fa icon="close" className="mr-1"/>
                ย้อนกลับ
              </Button>
            </Row>
          </div>
        )
      case requestStatus.TIMEOUT :
        return (
          <div>
            <Row style={{ marginTop: '10px' }}>
              <label className="card-label" style={{ fontSize: '1.5rem', color: '#ff0000', fontWeight: 'bold' }}>
                ขออภัย
              </label>
            </Row>
            <Row style={{ marginBottom: '30px' }}>
              <label className="card-label" style={{ fontSize: '1.1rem', color: '#ff0000' }}>
                คุณทำรายการเกินเวลาที่ระบบกำหนด
              </label>
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <Button color='red' onClick={this.onClickBack}>
                <Fa icon="close" className="mr-1"/>
                ย้อนกลับ
              </Button>
            </Row>
          </div>
        )
      default :
        return null
    }
  }

  render() {
    const { showLoading, requestId, currentDate, requestStatus } = this.props;
    const modalDetail= showLoading ? (
      <div>
        <Row style={{ marginBottom: '30px', marginTop: '10px' }}>
          <label className="card-label" style={{ fontSize: '1rem' }}>
            ระบบได้ทำการส่งคำร้องขอยืนยันตัวตนและการเข้าถึงข้อมูลไปที่ “ตัวตน Idp” แล้วกรุณาเปิด Appliction ของ “ตัวตน Idp” เพื่อทำการยืนยันคำร้อง
          </label>
        </Row>
        <Row className="blue-text" style={{ justifyContent: "center" }}>
          <Fa icon="spinner" pulse size="4x" fixed />
          <span className="sr-only">Loading...</span>
        </Row>
      </div>
    ) : (this.modalDetailRender(requestStatus));
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
                <label className="card-detail"> { requestId } </label>
              </Row>
              <Row>
                <label className="card-label">Request Time</label>
              </Row>
              <Row>
                <label className="card-detail"> { currentDate } </label>
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
