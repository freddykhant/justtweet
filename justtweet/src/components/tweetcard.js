import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class TweetCard extends Component {
  render() {
    const { tweet, onDelete } = this.props;
    return (
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>{tweet.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{tweet.username} - {tweet.date}</Card.Subtitle>
          <Card.Text>{tweet.tweetDesc}</Card.Text>
          <span>
            <Button
              onClick={() => onDelete(tweet._id)}
              variant="danger"
              className="float-right"
            >
              Delete
            </Button>
          </span>
        </Card.Body>
      </Card>
    );
  }
}

export default TweetCard;
