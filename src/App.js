import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap'
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
      {/* <Container>
          <Col style={{ marginTop: "30px", marginBottom: "30px" }}>
            <p className="h2 text-left dark-blue">Fax Claim Service</p>
            <p className="h5 text-left grey-text" style={{ marginTop: "30px" }}>
              {subtitle}
            </p>
          </Col>
      </Container> */}
      {console.log(subtitle)}
      <Switch>
        <Route exact path='/' component={() => <Login subtitle={subtitle}/>} />
        <Route path='/selectIdp' component={() => <IdpList subtitle={subtitle} />} />
        <Route path='/register' component={() => <Register subtitle={subtitle} />} />
      </Switch>
    </div>
    );
  }
}

export default App;


