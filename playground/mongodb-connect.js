// npm install mongodb@3.1.6 --save
// search for : MongoDB Node.JS Driver npm
// Mongoclient lets you connect to the mongo server
// https://mongodb.github.io/node-mongodb-native/

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID(); if we log this we will the mongodb object id


//this ObjectID let us make new object ids on the fly
//For production it can be amazon web service url.

//To find in collection : db.getCollection('Todos').find({})

//object destructuring : pull of values fron objects creating variables.
// example :
// var user = {name: 'nishant', age: 30};
// var {name} = user;
//destructured user object pulling off name property creating a new name variable.
// object destructuring perfect way to make new variables from object properties




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDb');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp');
  //mongo will not create database until we start adding data to it.
  //insertOne first argument is the object that we want to insert and the second argument is callback function.

    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, (err, result) => {
    //     if(err) {
    //       return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //now insert a new doc into users collection
    db.collection('users').insertOne({
      name: 'Nishant',
      email: 'rickynick9@gmail.com',
      phone: '+91 7760268387'
    }, (err, result) => {
        if(err) {
          return console.log('Unable to insert record in users collection', err);
        }
        //result.ops contains collection details that was inserted.
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    })
  client.close();

});
