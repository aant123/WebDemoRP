import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './rp/component/Header'
import { Col } from "mdbreact";
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
        <div>
          <Col style={{ paddingLeft: "30px", paddingTop: "30px"}}>
            <h2 className="text-left dark-blue">Fax Claim Service</h2>
          </Col>
        </div>
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


