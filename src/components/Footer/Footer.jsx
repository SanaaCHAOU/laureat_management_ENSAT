
import React, { Component } from "react";
import { Grid,Navbar } from "react-bootstrap";
import logo from "../../logo.svg";
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
        <Navbar>
          <Navbar.Brand href="#home">© 2020 BISD, Inc.</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">ADMIN</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
          
        </Grid>
      </footer>
    );
  }
}

export default Footer;
