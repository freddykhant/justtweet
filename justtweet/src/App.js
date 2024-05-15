import React from 'react';
import NavbarComponent from './components/navbar';
import ProfileCover from './components/profilecover';
import ProfileStats from './components/profilestats';
import ProfileInfo from './components/profileinfo';
import NewTweet from './components/newtweet';
import TweetCard from './components/tweetcard';
import RightPanel from './components/rightpanel';

function App() {

  const tweets = [
    { username: 'Freddy Khant', handle: 'freddykhant', content: 'I love React!' },
    { username: 'Sheik Fattah', handle: 'drsheikfattah', content: 'Hello Twitter!' }
  ];

  return (
    <>
      <NavbarComponent />
      <ProfileCover />
      <ProfileStats />
      <div className="container">
        <NewTweet />
        {tweets.map((tweet, index) => (
          <TweetCard key={index} tweet={tweet} />
        ))}
      </div>
    </>
  );
}

export default App;