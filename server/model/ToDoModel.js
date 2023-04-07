const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create a new schema

const ToDoSchema = new Schema({
  text:{
    type:String,
    require:true,
  }

})


const User = mongoose.model("ToDo",ToDoSchema);

module.exports = User;