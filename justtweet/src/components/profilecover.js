import React from 'react';
import { Image } from 'react-bootstrap';
import '../App.css'; 

const ProfileCover = () => {
  return (
    <div className="profile-cover">
      <Image
        src="https://pbs.twimg.com/profile_banners/1566463268/1714619053/1500x500" // Replace with your cover image URL
        alt="Profile Cover"
        fluid
        className="cover-image"
      />
    </div>
  );
};

export default ProfileCover;
