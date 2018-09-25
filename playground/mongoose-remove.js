const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

//remove everything from the collection
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove()
// Todo.findByIdAndRemove('5ba9caa6c0bfa715bef917cd').then((todo) => {
//   console.log(todo);
// });

//collection.remove is deprecated. Use deleteOne, deleteMany

Todo.findByIdAndDelete('5ba9cba9c0bfa715bef917ce').then((todo) => {
  console.log(todo);
});
