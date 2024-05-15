import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class TweetCard extends Component {
  render() {
    const { tweet } = this.props;
    return (
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>{tweet.username}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">@{tweet.handle}</Card.Subtitle>
          <Card.Text>
            {tweet.content}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default TweetCard;
