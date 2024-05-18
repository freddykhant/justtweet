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
        { content: "Can't wait to get my exams done." },
        { content: 'I love React!' },
        { content: 'Good Morning Twitter 😁' }
      ]
    };
    this.addTweet = this.addTweet.bind(this);
  }

  addTweet(content) {
    const newTweet = {
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