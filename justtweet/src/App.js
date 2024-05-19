import React, { Component } from 'react';
import NavbarComponent from './components/navbar';
import ProfileCover from './components/profilecover';
import ProfileStats from './components/profilestats';
import ProfileInfo from './components/profileinfo';
import NewTweet from './components/newtweet';
import TweetCard from './components/tweetcard';
import RightPanel from './components/rightpanel';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
    this.handleNewTweet = this.handleNewTweet.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.getTweets();
  }

  async getTweets() {
    try {
      const response = await axios.get('http://localhost:5001/tweets');
      this.setState({ tweets: response.data });
    } catch (error) {
      console.error('Error fetching tweets:', error);
    }
  }

  async handleNewTweet(newTweet) {
    try {
      const response = await axios.post('http://localhost:5001/tweets', {
        name: 'Freddy Khant',
        username: 'freddykhant',
        date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
        tweetDesc: newTweet
      });
      this.setState({ tweets: [response.data, ...this.state.tweets] });
    } catch (error) {
      console.error('Error posting tweet:', error);
    }
  }

  async handleDelete(tweetID) {
    try {
      await axios.delete(`http://localhost:5001/tweets/${tweetID}`);
      this.setState({ tweets: this.state.tweets.filter(tweet => tweet._id !== tweetID) });
    } catch (error) {
      console.error('Error deleting tweet:', error);
    }
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
              <NewTweet onTweet={this.handleNewTweet} />
              {this.state.tweets.map((tweet) => (
                <TweetCard key={tweet._id} tweet={tweet} onDelete={this.handleDelete} />
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
