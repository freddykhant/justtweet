import React, { Component } from 'react';
import NavbarComponent from './components/navbar';
import ProfileCover from './components/profilecover';
import ProfileStats from './components/profilestats';
import ProfileInfo from './components/profileinfo';
import NewTweet from './components/newtweet';
import TweetCard from './components/tweetcard';
import RightPanel from './components/rightpanel';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        { id: 1, name: 'Freddy Khant', username: 'freddykhant', date: 'Nov 20', tweetDesc: 'Hello World!!' },
        { id: 2, name: 'Freddy Khant', username: 'freddykhant', date: 'Dec 20', tweetDesc: 'Good morning Twitter 😁' },
        { id: 3, name: 'Freddy Khant', username: 'freddykhant', date: 'Dec 20', tweetDesc: 'I love React.' },
        { id: 4, name: 'Freddy Khant', username: 'freddykhant', date: 'Jan 21', tweetDesc: "Can't wait to get my exams done" }
      ]
    };
    this.addTweet = this.addTweet.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  addTweet(content) {
    const newTweet = {
      id: this.state.tweets.length + 1,
      name: 'Freddy Khant', 
      username: 'freddykhant',
      date: new Date().toLocaleDateString("en-AU", { day: 'numeric', month: 'long', year: 'numeric' }),
      tweetDesc: content
    };
    this.setState({ tweets: [newTweet, ...this.state.tweets] });
  }

  handleDelete(tweetID) {
    const tweets = this.state.tweets.filter(tweet => tweet.id !== tweetID);
    this.setState({ tweets: tweets });
  }

  render() {
    return (
      <>
        <NavbarComponent />
        <ProfileCover />
        <ProfileStats tweetCount={this.state.tweets.length} />
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3">
              <ProfileInfo />
            </div>
            <div className="col-md-6">
              <NewTweet onTweet={this.addTweet} />
              {this.state.tweets.map((tweet) => (
                <TweetCard key={tweet.id} tweet={tweet} onDelete={this.handleDelete} />
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
