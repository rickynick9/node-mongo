var mongoose = require('mongoose');

var Todo = mongoose.model('Todos', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: null
  },
  completedAt: {
    //its just the unix timestamp
    type: Number
  }
});

module.exports = {
  Todo
};
