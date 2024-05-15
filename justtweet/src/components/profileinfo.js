import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class ProfileInfo extends Component {
  render() {
    return (
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Freddy Khant</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">@freddykhant</Card.Subtitle>
          <Card.Text>
            Bio: Passionate Computer Science Student that loves to build cool stuff.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ProfileInfo;
