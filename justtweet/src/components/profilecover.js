import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import '../App.css';

class ProfileCover extends Component {
  render() {
    return (
      <div className="profile-cover">
        <Image
          src="https://pbs.twimg.com/profile_banners/1566463268/1714619053/1500x500" 
          alt="Profile Cover"
          fluid
          className="cover-image"
        />
      </div>
    );
  }
}

export default ProfileCover;
