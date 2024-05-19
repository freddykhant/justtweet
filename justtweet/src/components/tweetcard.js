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
    return (
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>{this.state.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">@{this.state.username} - {this.state.date}</Card.Subtitle>
          <Card.Text>{this.state.tweetDesc}</Card.Text>
          <Button
            variant="link"
            className="float-right"
            onClick={() => this.props.onDelete(this.state.id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default TweetCard;
