var mongoose = require('mongoose');

//mongoose configuration : we are connected to the database and we se-up mongoose to use Promises.

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp')

//model takes model name, and various properties of the model as arguments.
//define a model
// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minLength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: null
//   },
//   completedAt: {
//     //its just the unix timestamp
//     type: Number
//   }
// });

//initialize a model
// var newTodo = new Todo({
//   text: 'Cook Dinner'
// });
//
// //save the model to the database
// // save returns a Promise
// newTodo.save().then((doc) => {
//   console.log('Saved Todo ', doc);
// }, (e) => {
//   console.log('Unable to save Todo');
// });

// var otherTodo = new Todo({
//   text: 'Feed the cat',
//   completed: true,
//   completedAt: 123
// });

// var otherTodo = new Todo({
//   text: '  f   ',
//   completed: true,
//   completedAt: 123
// });
//
//
// otherTodo.save().then((doc) => {
//   console.log('Saved Todo ', JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save Todo', e);
// });

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  }
});

var newUser = new User({
  email: 'nishant@gmail.com '
});

newUser.save().then((doc) => {
  console.log('User saved ', doc);
}, (e) => {
  console.log('Unable to save ', e);
});
