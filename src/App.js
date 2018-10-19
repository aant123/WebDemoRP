import React, { Component } from 'react';
// import {PageHeader} from 'react-bootstrap'
import Login from '../src/rp/component/Login'
import Register from '../src/rp/component/Register'
import FillUserInfo from '../src/rp/component/FillUserInfo'
import FillClaimInfo from '../src/rp/component/FillClaimInfo'
// import ListIdpContrainer from '../src/rp/contrainer/ListIdpContrainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Register/>
      </div>
    );
  }
}

export default App;
