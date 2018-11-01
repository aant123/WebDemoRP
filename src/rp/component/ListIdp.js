import React, { Component } from 'react';
import uuidv4 from 'uuid-v4'
import moment from 'moment';
import 'moment/min/locales.min';
import { withRouter } from 'react-router-dom'

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Container, ListGroup, ListGroupItem, Button, Col, Row, Fa  } from 'mdbreact'

import icon1 from "../../icon/Layer 1.png";
import icon2 from "../../icon/Group 22.png";
import icon3 from "../../icon/Group 23.png";

class ListIdp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectIdp: null,
      showModalReqIdp: false,
      icons: [icon1, icon2, icon3]
    }
  }
  componentWillMount() {
    this.props.getdata()
  }
  selectIdp = (objIdp, index) => {
    this.setState({ selectIdp: objIdp })
  }
  onClickNext = () => {
    if (this.state.selectIdp !== null) {
      const booleanshowModalReqIdp = true
      const requestId = uuidv4()
      moment.locale('th')
      const currentDate = moment().format('LLL');
      this.props.selectIdp(this.state.selectIdp, booleanshowModalReqIdp, requestId, currentDate)
    }
    this.props.history.push('#');
  }
  onClickBack = () => {
    this.props.history.push('/');
  }

  idpList = () => {
    const { idpList, showLoadingIdpList } = this.props
    if (showLoadingIdpList) {
      return (
        <div>
          <Col className="text-center" style={{ color: '#3BBBFF', justifyContent: "center", paddingTop: "20px", paddingBottom: "20px" }}>
          <h5 style={{ marginTop: "30px", marginBottom: '50px', fontSize: '1.5rem' }}>
            ... Loading ...
          </h5>
          <Fa icon="spinner" pulse size="5x" fixed />
          </Col>
        </div>
      )
    }
    if (idpList.length > 0) {
      return (
        <div>
          <Col style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            {idpList.map((data, index) => {
              return (
                <ListGroup role="tablist">
                  <ListGroupItem onClick={() => this.selectIdp(data, index)} className='idpList' hover>
                    <Row>
                      <Col className='text-center' xs="4">
                        <img
                          src={this.state.icons[index]}
                          alt="logo"
                          height='50px'
                        />
                      </Col>
                      <Col xs="8">
                        <label style={{ transform: 'translateY(50%)' }}>
                          {data.node_name}
                        </label>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <br />
                </ListGroup>
              )
            })}
          </Col>
          <Col style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            <Button block color="primary"
              onClick={this.onClickNext}
            >
              ดำเนินการต่อ
          </Button>
          </Col>
        </div>
      )
    } else {
      return (
        <div>
          <Col style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <h5 className="text-center"
            style={{ marginTop: "30px", color: '#ff0000'}}>
            *** ไม่พบผู้ให้บริการยืนยันตัวตน ***
          </h5>
          </Col>
          <Col style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            <Button block color="red"
              onClick={this.onClickBack}
            >
            ย้อนกลับ
          </Button>
          </Col>
        </div>
      )
    }
  }

  render() {
    return (
      <Container>
        <Col>
          <h6 className="text-left grey-text">
            ลงทะเบียนเข้าใช้งาน > ยืนยันตัวตน
          </h6>
          <h5 className="text-left grey-text"
            style={{ marginTop: "30px" }}>
            เลือกผู้ให้บริการยืนยันตัวตน
          </h5>
        </Col>
        {this.idpList()}
      </Container>

    )
  }
}

export default withRouter(ListIdp);