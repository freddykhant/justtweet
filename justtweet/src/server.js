const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://20618166:yrpassword@cluster0.yh7lhnx.mongodb.net/justtweet?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const TweetSchema = new mongoose.Schema({
  name: String,
  username: String,
  date: String,
  tweetDesc: String
});

const Tweet = mongoose.model('Tweet', TweetSchema);

app.get('/tweets', (req, res) => {
  Tweet.find()
    .then(tweets => res.json(tweets))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/tweets', (req, res) => {
  const newTweet = new Tweet(req.body);
  newTweet.save()
    .then(tweet => res.json(tweet))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.delete('/tweets/:id', (req, res) => {
  Tweet.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Tweet deleted' }))
    .catch(err => res.status(500).json({ error: err.message }));
});

const port = 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
