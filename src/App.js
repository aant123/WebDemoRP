import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap'
import ListIdpContrainer from '../src/rp/contrainer/ListIdpContrainer'
import {Route , Switch} from 'react-router-dom'
import Header from './rp/component/Header'
import {Col, Container} from "mdbreact";
import './App.css';

import Login from './rp/component/Login'
import Register from './rp/component/Register'
import ClaimStatus from './rp/component/ClaimStatus'
import FillUserInfo from './rp/component/FillUserInfo'
import FillClaimInfo from './rp/component/FillClaimInfo'
import IdpList from './rp/contrainer/ListIdpContrainer'

class App extends Component {
  renderSubTittle = () => {
    switch(window.location.pathname) {
      case '/':
          return 'ผู้ใช้งานใหม่ หรือยังไม่เคยลงทะเบียน online'
      case '/selectIdp':
          return 'เลือกผู้ให้บริการยืนยันตัวตน'
      case '/register':
          return 'ลงทะเบียนผู้ใช้งาน'
      default:
          return ''
  }
  }
  render() {
    const subtitle = this.renderSubTittle()
    return (
      <div>
      <Header/>
      <Container>
          <Col style={{ paddingTop: "30px" }}>
            <p className="h2 text-left dark-blue">Fax Claim Service</p>
          </Col>
      </Container>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/selectIdp' component={IdpList} />
        <Route path='/register' component={Register} />
        <Route path='/fillUserInfo' component={FillUserInfo} />
        <Route path='/fillClaimInfo' component={FillClaimInfo} />
        <Route path='/claimStatus' component={ClaimStatus} />

      </Switch>
    </div>
    );
  }
}

export default App;


