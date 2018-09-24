const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB', err);
  }
  console.log('Successfully connect to MongoDB');

  const db = client.db('TodoApp');

  // returnOriginal : we don't want the below query to return the original value rather we want to
  // return updated value so returnOriginal is set to false. By default its true.
  db.collection('users').findOneAndUpdate({
    _id: new ObjectID("5ba87cc4c0bfa715bef917cc")
  },{
    $set: {name: 'Priya', email: 'vatspriya12.s@gmail.com'},
    //$set: {email: 'vatspriya.s@gmail.com'},
    $inc: {age: -2}
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5ba4d6a31cab5f8b04df2f07")
  // }, {
  //   $set: {text: 'walk dog updated'}
  // }, {
  //   returnOriginal: false}).then((result) => {
  //
  // });

});
