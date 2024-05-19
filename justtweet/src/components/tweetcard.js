import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class TweetCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.tweet.id,
      name: this.props.tweet.name,
      username: this.props.tweet.username,
      date: this.props.tweet.date,
      tweetDesc: this.props.tweet.tweetDesc
    };
  }

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
              onClick={() => onDelete(tweet.id)}
              variant="danger"
              className="float-right"
            >
            delete
            </Button>
          </span>
        </Card.Body>
      </Card>
    );
  }
}

export default TweetCard;
