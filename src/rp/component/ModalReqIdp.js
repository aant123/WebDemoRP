import React, { Component } from 'react';
import { Container, Modal, Fa, ModalBody, Row } from 'mdbreact'


class ModalReqIdp extends Component {
    componentWillMount(){
        this.props.reqToIdp()
    }
    clickSucess = () => {
        this.props.sucessModal(true)
    }
    render(){
        const {showLoading} = this.props
        const textDetailSucess = 'ระบบได้รับการยืนยันและข้อมูลจาก “ตัวตน Idp แล้ว” '
        const textDetailWaiting = 'ระบบได้ทำการส่งคำร้องขอยืนยันตัวตนและการเข้าถึงข้อมูลไปที่ “ตัวตน Idp” แล้วกรุณาเปิด Appliction ของ “ตัวตน Idp” เพื่อทำการยืนยันคำร้อง'
        const modalDetail = showLoading? (
            <div className='text-center'>
                <Row>
                    <label className="h6 mb-4">{textDetailWaiting}</label>
                </Row>
                <Row className='blue-text' style={{justifyContent: 'center'}}>
                    <Fa icon="spinner" pulse size="4x" fixed/>
                    <span className="sr-only" >Loading...</span>
                </Row>
            </div>
        ) : 
        (
            <div className='text-center'>
                <Row>
                    <label className="h6 mb-4 green-text">{textDetailSucess}</label>
                </Row>
                <Row className='green-text' style={{justifyContent: 'center'}}>
                    <Fa icon='check-circle-o' size='4x' onClick={this.clickSucess}></Fa>
                </Row>
            </div>
        )
        return(
            <Container>
                <Modal isOpen={true} toggle={true}>
                    <ModalBody style={{marginLeft: 10}}>
                        <Row>
                            <label className="h5 mb-4">Reference ID </label>
                        </Row>
                        <Row>
                            <label className="h7 mb-4 blue-text">1425514145551 </label>
                        </Row>
                        <Row>
                            <label className="h5 mb-4">Request Time </label>
                        </Row>
                        <Row>
                            <label className="h7 mb-4 blue-text">15 ตุลาคม 2561 14:00</label>
                        </Row>
                            { modalDetail }
                    </ModalBody>
                </Modal>
          </Container>
        )
    }
}

export default ModalReqIdp;