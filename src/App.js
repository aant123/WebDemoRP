import React, { Component } from 'react';
import {PageHeader} from 'react-bootstrap'
// import Login from '../src/rp/component/Login'
import ListIdpContrainer from '../src/rp/contrainer/ListIdpContrainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <PageHeader style={{marginLeft:'50px',marginRight:'50px'}}> RP </PageHeader>
      <ListIdpContrainer/>
      </div>
    );
  }
}

export default App;
