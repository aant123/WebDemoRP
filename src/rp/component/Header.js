import React, { Component } from "react";

import { Route, Router } from "react-router-dom";
import ListIdpContrainer from "../contrainer/ListIdpContrainer";
import logo from "../../icon/BFE-Logo.png";

import { Container, Footer} from "mdbreact";

class Header extends Component {
  clickSubmit = () => {
    // window.location = '/ListIdp'
    // console.log('window.location',window.location);
  };
  render() {
    return (
      <Footer style={{background:'#2F4A62'}}>
        <Container>
          <img
            src={logo}
            alt="logo"
            className="mx-auto d-block"
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
          />
        </Container>
      </Footer>
    );
  }
}

export default Header;
