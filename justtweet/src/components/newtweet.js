import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

class NewTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetContent: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTweetDescChange = this.handleTweetDescChange.bind(this);
  }

  handleChange(event) {
    this.setState({ tweetContent: event.target.value });
  }

  handleTweetDescChange(event) {
    event.preventDefault();
    this.props.onTweet(this.state.tweetContent);
    this.setState({ tweetContent: '' });
  }

  render() {
    return (
      <Card className="mb-3">
        <Card.Body>
          <Form onSubmit={this.handleTweetDescChange}>
            <Form.Group controlId="tweetContent">
              <Form.Label>What's happening?</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={this.state.tweetContent}
                onChange={this.handleChange}
                placeholder="Enter your tweet"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Tweet
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default NewTweet;