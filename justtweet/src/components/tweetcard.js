import React from 'react';
import { Card } from 'react-bootstrap';

const TweetCard = ({ tweet }) => {
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
};

export default TweetCard;