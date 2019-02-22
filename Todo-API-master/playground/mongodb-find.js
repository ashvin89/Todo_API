//const  MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
        if(err){
            return console.log('Unable to connect to mongodb server');
        }
        console.log('Connected to mongodb server');

       /* db.collection('Todos').find({
            _id: new ObjectID('5b143e5b149cd259c53aee53')
        }).toArray().then((docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs,undefined,2));
        },(err) => {
                console.log('Unble to fetch todos',err);
        });*/
        /*db.collection('Todos').find().count().then((count) => {
            console.log(`Todos Count: ${count}`);
           // console.log(JSON.stringify(docs,undefined,2));
        },(err) => {
                console.log('Unble to fetch todos',err);
        });*/
        db.collection('Users').find({Name: 'Tatvam'}).toArray().then((docs) => {
           // console.log(`Todos Count: ${count}`);
            console.log(JSON.stringify(docs,undefined,2));
        },(err) => {
                console.log('Unble to fetch todos',err);
        });

       // db.close();
});