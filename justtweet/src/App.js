import React from 'react';
import NavbarComponent from './components/navbar';
import ProfileCover from './components/profilecover';
import ProfileStats from './components/profilestats';
import ProfileInfo from './components/profileinfo';
import NewTweet from './components/newtweet';
import TweetCard from './components/tweetcard';
import RightPanel from './components/rightpanel';

function App() {
  return (
    <>
      <NavbarComponent />
      <ProfileCover />
      <ProfileStats />
    </>
  );
}

export default App;