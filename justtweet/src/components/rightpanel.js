import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

class RightPanel extends Component {
  render() {
    return (
        <div className="right-panel">
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>Who to follow</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <strong>Elon Musk</strong> @elonmusk
                                </div>
                                <Button variant="outline-primary" size="sm">Follow</Button>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <strong>Jeff Bezos</strong> @JeffBezos
                                </div>
                                <Button variant="outline-primary" size="sm">Follow</Button>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <strong>Bill Gates</strong> @BillGates
                                </div>
                                <Button variant="outline-primary" size="sm">Follow</Button>
                            </div>
                        </ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    );
  }
}

export default RightPanel;
