import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './rp/component/Header'
import { Col, Container } from "mdbreact";
import './App.css';

import Login from './rp/contrainer/LoginContainer'
import Register from './rp/contrainer/RegisterContainer'
import ClaimStatus from './rp/contrainer/ClaimStatusContainer'
import FillUserInfo from './rp/contrainer/FillUserInfoContainer'
import IdpList from './rp/contrainer/ListIdpContrainer'
import FillClaimInfo from './rp/contrainer/FillClaimInfoContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Col style={{ paddingTop: "30px" }}>
            <h2 className="text-left" style={{ color: '#2F4A62' }}>Fax Claim Service</h2>
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


