var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();
///connect to mongo

mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on('connected',()=>{
	console.log("Connected to Database");
});
//on error connection
mongoose.connection.on('Error',(err)=>{
	if(err){ console.log('Error in connection'); }
});



//defining route
const route = require('./routes/route');
//adding middleware
app.use(cors());
//adding body-parser
app.use(bodyParser.json());
//static files
app.use(express.static(path.join(__dirname,'public')));
//route
app.use('/api',route);
//port no.
const port = 3000;
//Listening Port
app.listen(port,()=>{
	console.log("Server Started");
});

app.get('/',(req,res) =>{
	res.send("Test");
})