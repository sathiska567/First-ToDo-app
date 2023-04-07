const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./router/TodoRouts");

require("./mongodb/mongoose");

const app = express();

app.use(cors());
app.use(bodyParser.json());


const port = 5000;

app.use(routes);

app.listen(port,()=>{
    console.log('Server is up and running on port '+ port);
});


