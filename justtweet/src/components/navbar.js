import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';

class NavbarComponent extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Row className="w-100">
            <Col>
              <Navbar.Brand href="#">JustTweet</Navbar.Brand>
            </Col>
            <Col className="d-flex justify-content-center">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#moments">Moments</Nav.Link>
                <Nav.Link href="#notifications">Notifications</Nav.Link>
                <Nav.Link href="#messages">Messages</Nav.Link>
              </Nav>
            </Col>
            <Col className="d-flex justify-content-end align-items-center">
              <Form inline className="mr-3">
                <FormControl type="text" placeholder="Search Twitter" className="mr-sm-2" />
              </Form>
              <Button variant="primary">Tweet</Button>
            </Col>
          </Row>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarComponent;
