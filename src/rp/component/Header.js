import React, { Component } from "react";
import logo from "../../icon/BFE-Logo.png";

import { Container, Footer} from "mdbreact";

class Header extends Component {
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
