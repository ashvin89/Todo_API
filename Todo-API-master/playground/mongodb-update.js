//const  MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
        if(err){
            return console.log('Unable to connect to mongodb server');
        }
        console.log('Connected to mongodb server');

       /* db.collection('Todos').findOneAndUpdate({
            _id : new ObjectID("5b14eb34186a0bf15214106d") 
        },{
            $set : {
                completed : true
            }
        },{
            returnOriginal : false
        }).then((result) => {
            console.log(result);
        });*/

        db.collection('Users').findOneAndUpdate({
            _id : ObjectID("5b14ecdf186a0bf1521410e8")
        },{
            $set :{
                Name :'Tatvam'
            },
            $inc : {
                Age : 1
            }
        },{
            returnOriginal : false
        }).then((result) => {
            console.log(result);
        });
      
       // db.close();
});