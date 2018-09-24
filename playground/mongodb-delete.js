const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDb', err);
  }
  console.log('Successfully connected to MongoDB');
  const db = client.db('TodoApp');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Hello World'}).then((result) => {
  //   console.log(result);
  // });
  //
  // //deleteOne
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //
  // //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('users').deleteMany({name: 'Nishant'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('users').findOneAndDelete(
    {_id : new ObjectID("5ba86d18c0bfa715bef917c9")}).then((result) => {
      console.log(JSON.stringify(result, undefined, 2));
  });
});
