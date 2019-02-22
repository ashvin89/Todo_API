const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');

var id = "5b24dbdd995b59e60d1c8171";

if(!ObjectID.isValid(id)){
    console.log('Id not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos',todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo',todo);
});

Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('Id not found');
    }
    console.log('Todo',todo);
}).catch((e) => console.log(e));

User.findById('57bdb0fcdedf88540bfa2d66').then((user) => {
    if (!user) {
      return console.log('Unable to find user');
    }
  
    console.log(JSON.stringify(user, undefined, 2));
  }, (e) => {
    console.log(e);
  });