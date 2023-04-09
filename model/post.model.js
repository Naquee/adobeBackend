const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 300
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0,
    min: 0
  }
});

const postModel = mongoose.model('post', postSchema);

module.exports = {postModel};