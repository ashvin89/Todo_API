//const  MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb');

/*var obj = new ObjectID();
console.log(obj);*/

/*const user = {name:'Tatvam',age:21};
var {name} = user;
console.log(name);*/

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
        if(err){
            return console.log('Unable to connect to mongodb server');
        }
        console.log('Connected to mongodb server');

        db.collection('Todos').insertOne({
            text: 'Something to do',
            completed:false   
        },(err,result) =>{
            if(err) {
                return console.log('Unable to insert todo',err);
            }
            console.log(JSON.stringify(result.ops,undefined,2));
            
        });

     /*   db.collection('Users').insertOne({
            Name: 'Tatvam',
            Age: 21,
            Location: 'Jaipur' 
        },(err,result) =>{
            if(err){
                return console.log('Unable to insert todo',err);
            }
            //console.log(JSON.stringify(result.ops,undefined,2));
            console.log(result.ops[0]._id.getTimestamp());
        });*/

        db.close();
});