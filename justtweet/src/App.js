import React from 'react';
import NavbarComponent from './components/navbar';
import ProfileCover from './components/profilecover';
import ProfileInfo from './components/profileinfo';
import ProfileStats from './components/profilestats';
import NewTweet from './components/newtweet';
import TweetCard from './components/tweetcard';
import RightPanel from './components/rightpanel';

function App() {
  return (
    <>
      <NavbarComponent />
      <ProfileCover />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ProfileInfo />
          </div>
          <div className="col-6">
            <ProfileStats />
            <NewTweet />
            <TweetCard />
            <TweetCard />
            <TweetCard />
          </div>
          <div className="col-3">
            <RightPanel />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
