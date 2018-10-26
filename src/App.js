import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './rp/component/Header'
import { Col, Container } from "mdbreact";
import './App.css';

import Login from './rp/component/Login'
import Register from './rp/component/Register'
import ClaimStatus from './rp/contrainer/ClaimStatusContainer'
import FillUserInfo from './rp/component/FillUserInfo'
import IdpList from './rp/contrainer/ListIdpContrainer'
import FillClaimInfo from './rp/contrainer/FillClaimInfoContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
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


