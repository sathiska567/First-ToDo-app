const mongoose = require("mongoose");
// const routes = require("../routes/TodoRouts");

const mongodbURL = "mongodb+srv://ravishan:Pass123@cluster0.zmi2r0z.mongodb.net/ToDoApp?retryWrites=true&w=majority"

mongoose.connect(mongodbURL,
 { useNewUrlParser:true,
   useUnifiedTopology : true,
}) 

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("Mongodb connected");
})
