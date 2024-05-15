import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

class NewTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetContent: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ tweetContent: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.tweetContent.trim() !== '') {
      this.props.onTweet(this.state.tweetContent);
      this.setState({ tweetContent: '' });
    }
  }

  render() {
    return (
      <Card className="mb-3">
        <Card.Body>
          <Form onSubmit={this.handleSubmit}>
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
