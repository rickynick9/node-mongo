const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

var id = '5ba8b476789cef3f057a901d';

if(!ObjectID.isValid(id)) {
  console.log('Id not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todos) => {
//   console.log('Todos ', todos);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id ', todo);
// }).catch((e) => {
//   console.log(e);
// });


User.findById('5ba87cc4c0bfa715bef917cc').then((user) => {
  if(!user) {
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
