import React, { Component } from 'react';
import {PageHeader} from 'react-bootstrap'
import ListIdpContrainer from '../src/rp/contrainer/ListIdpContrainer'
import Login from './rp/component/Login'
import {Route , Switch} from 'react-router-dom'
import Register from './rp/component/Register'
import IdpList from './rp/contrainer/ListIdpContrainer'
import Header from './rp/component/Header'
import {Col, Container} from "mdbreact";
import './App.css';

class App extends Component {
  renderSubTittle = () => {
    switch(window.location.pathname) {
      case '/':
          return 'ผู้ใช้งานใหม่ หรือยังไม่เคยลงทะเบียน online'
      case '/selectIdp':
          return 'ลงทะเบียนเข้าใช้งาน>ยืนยันตัวตน'
      case '/register':
          return 'ลงทะเบียนผู้ใช้งาน'
      default:
          return ''
  }
  }
  render() {
    const subTittle = this.renderSubTittle()
    return (
      <div>
      <Header/>
      <Container>
          <Col style={{ marginTop: "30px", marginBottom: "50px" }}>
            <p className="h2 text-left dark-blue">Fax Claim Service</p>
            <p className="h5 text-left grey-text" style={{ marginTop: "30px" }}>
              {subTittle}
            </p>
          </Col>
      </Container>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/selectIdp' component={IdpList} />
        <Route path='/register' component={Register} />
      </Switch>
    </div>
    );
  }
}

export default App;


