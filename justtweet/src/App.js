import React, { Component } from 'react';
import NavbarComponent from './components/navbar';
import ProfileCover from './components/profilecover';
import ProfileStats from './components/profilestats';
import ProfileInfo from './components/profileinfo';
import NewTweet from './components/newtweet';
import TweetCard from './components/tweetcard';
import RightPanel from './components/rightpanel';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets : [
        { username: 'Freddy Khant', handle: 'freddykhant', content: 'I love React!' },
        { username: 'Sheik Fattah', handle: 'drsheikfattah', content: 'Hello Twitter!' },
        { username: 'Mark Zuckerberg', handle: 'finkd', content: 'The Metaverse is near' }
      ]
    };
    this.addTweet = this.addTweet.bind(this);
  }

  addTweet(content) {
    const newTweet = {
      username: 'Freddy Khant',
      handle: 'freddykhant',
      content: content
    };
    this.setState({tweets: [newTweet, ...this.state.tweets]});
  }

  render() {
    return (
      <>
        <NavbarComponent />
        <ProfileCover />
        <ProfileStats />
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3">
              <ProfileInfo />
            </div>
            <div className="col-md-6">
              <NewTweet onTweet={this.addTweet} />
              {this.state.tweets.map((tweet, index) => (
                <TweetCard key={index} tweet={tweet} />
              ))}
            </div>
            <div className="col-md-3">
              <RightPanel />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;