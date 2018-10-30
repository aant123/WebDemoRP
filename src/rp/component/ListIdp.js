import React, { Component } from 'react';
import uuidv4 from 'uuid-v4'
import * as moment from 'moment';
import 'moment/min/locales.min';
import { withRouter } from 'react-router-dom'

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Container, ListGroup, ListGroupItem, Button, Col, Row } from 'mdbreact'

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
    console.log('dfdfs',this.props)
    this.props.getdata()
  }
  selectIdp = (objIdp, index) => {
    // objIdp= {...objIdp,id : uuidv4()}
    this.setState({ selectIdp: objIdp })
  }
  clickBtnNextStep = () => {
    if (this.state.selectIdp !== null) {
      const booleanshowModalReqIdp = true
      const requestId = uuidv4()
      moment.locale('th')
      const currentDate = moment().format('LLL');
      this.props.selectIdp(this.state.selectIdp, booleanshowModalReqIdp, requestId, currentDate)
    }
    this.props.history.push('#');

  }
  render() {
    const { idpList } = this.props
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
        <Col style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          {idpList.length > 0 ? idpList.map((data, index) => {
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
                      <label style={{ transform:'translateY(50%)' }}>
                        {data.node_name}
                      </label>
                    </Col>
                    </Row>
                  </ListGroupItem>
                  <br/>
              </ListGroup>
            )
          }) : null }

        </Col>
        <Col style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <Button block color="primary" 
          onClick={this.clickBtnNextStep}
          >
            ดำเนินการต่อ
          </Button>
        </Col>
      </Container>

    )
  }
}

export default withRouter(ListIdp);