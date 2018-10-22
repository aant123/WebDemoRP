import React, { Component } from 'react';
// import {ListGroup, ListGroupItem} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Container, ListGroup, ListGroupItem, Button, Col, Row } from 'mdbreact'

import logo from "../../icon/BFE-Logo.png";

class ListIdp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectIdp: null,
      showModalReqIdp: false,
    }
  }
  componentWillMount() {
    this.props.getdata()
  }
  selectIdp = (objIdp, index) => {
    // objIdp= {...objIdp,showActiveIdp :true}
    this.setState({ selectIdp: objIdp })
  }
  clickBtnNextStep = () => {
    if (this.state.selectIdp !== null) {
      const booleanshowModalReqIdp = true
      this.props.selectIdp(this.state.selectIdp, booleanshowModalReqIdp)
    }
  }
  render() {
    const { idpList } = this.props
    return (
      <Container>
        <Col style={{ marginTop: "30px", marginBottom: "20px" }}>
          <label className="h2 text-left dark-blue">Fax Claim Service</label>
          <label className="h6 text-left grey-text">
            ลงทะเบียนเข้าใช้งาน > ยืนยันตัวตน
          </label>
          <label className="h5 text-left grey-text" 
            style={{ marginTop: "30px" }}>
            เลือกผู้ให้บริการยืนยันตัวตน
          </label>
        </Col>
        <Col style={{ marginTop: "20px", marginBottom: "20px" }}>
          {idpList.length > 0 ? idpList.map((data, index) => {
            const path = '/citizen_id/1234567'
            this.checkSelect = Array(idpList.length)
            return (
              <ListGroup role="tablist">
                  <ListGroupItem onClick={() => this.selectIdp(data, index)} className='idpList' hover>
                  <Row style={{ paddingLeft: '40px' }}>
                    <Col>
                      <img
                        src={logo}
                        alt="logo"
                        height='50px'
                      />
                    </Col>
                    <Col>
                      <p style={{ 
                        // color:'#3BBBFF',
                       transform:'translateY(50%)' }}>{data.node_id}</p>
                    </Col>
                    </Row>
                  </ListGroupItem>
                  <br/>
              </ListGroup>
            )
          }) : null}

          <Button block href="#" color="primary" onClick={this.clickBtnNextStep}>
            ดำเนินการต่อ
          </Button>
        </Col>
      </Container>

    )
  }
}

export default ListIdp