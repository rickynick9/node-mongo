var mongoose = require('mongoose');

//mongoose configuration : we are connected to the database and we se-up mongoose to use Promises.

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// module.exports = {
//   mongoose: mongoose;
// }

//ES6 syntax
module.exports = {
  mongoose
};
