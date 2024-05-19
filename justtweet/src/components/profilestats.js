import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProfileStats = ({ tweetCount }) => {
  return (
    <Container className="profile-stats">
      <Row>
        <Col className="stat-item">
          <div>Tweets</div>
          <div>{tweetCount}</div>
        </Col>
        <Col className="stat-item">
          <div>Following</div>
          <div>420</div>
        </Col>
        <Col className="stat-item">
          <div>Followers</div>
          <div>583</div>
        </Col>
        <Col className="stat-item">
          <div>Likes</div>
          <div>241</div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileStats;