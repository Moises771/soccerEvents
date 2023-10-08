import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" className="bg-body-dark" bg="dark" variant={"dark"}>
          <Container>
            <Navbar.Brand href="#home">Kultureliten</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
