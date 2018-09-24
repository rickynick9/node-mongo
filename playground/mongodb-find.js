const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDb', err);
  }
  console.log('Successfully connected to MongoDB');

  const db = client.db('TodoApp');

  //find returns mongodb cursor. This cursor is not a document but pointer to the document(s).
  // the below find query finds all documents from the collection.
  // toArray() - returns array of documents. It returns a Promise.
  //db.collection('Todos').find({completed: false}).toArray().then((docs) => {

  db.collection('Todos').find({_id: new ObjectID('5ba4b1e90e20456cdf1e369f')}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Todos collection ', err);
  });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Total count ${count}`);
  }, (err) => {
    console.log('Unable to fetch count', err);
  });

  //db.collection('users').find({email: 'ricky'})

  client.close();
});
