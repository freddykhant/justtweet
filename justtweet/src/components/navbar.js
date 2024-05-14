import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class NavbarComponent extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">JustTweet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#moments">Moments</Nav.Link>
            <Nav.Link href="#notifications">Notifications</Nav.Link>
            <Nav.Link href="#messages">Messages</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search Twitter" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
          <Button variant="primary" className="ml-2">Tweet</Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarComponent;
