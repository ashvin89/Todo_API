
const {MongoClient, ObjectID} =require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
        if(err){
            return console.log('Unable to connect to mongodb server');
        }
        console.log('Connected to mongodb server');

        //deleteMany
           /* db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
                    console.log(result);
            });*/

        // deleteOne
          /*   db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
                    console.log(result);
            });*/

        //findOneAndDelete
          /*  db.collection('Todos').findOneAndDelete({completed:false}).then((result) =>{
                console.log(result);
            });*/

            db.collection('Users').deleteMany({Name:'Tatvam'}).then((result) => {
                console.log(result);
            });

            db.collection('Users').findOneAndDelete({
                _id : new ObjectID('5b14246b5d1c855338a369e6')})
                .then((result) => {
                    console.log(JSON.stringify(result,undefined,2));
            });

        //db.close();
});