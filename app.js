// Imports
require("dotenv").config();
var express    = require('express');
var path       = require('path');
var logger     = require('morgan');
var bodyParser = require('body-parser');

// Require routes
// They are yet to be created
//var index = require('./routes/index');
//const api = require('./routes/api/index');

// Setup an express app
var app = express();
// **************************

// Database connection here
const mongoose = require("mongoose");
var MongoClient =  require("mongodb").MongoClient;
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on("error",error => console.log(error));
db.once("open",() =>console.log("connection done"));

// ********************
const M_StockRouter = require("./routes/M_Stock.js");
const OrderNoticeRouter = require("./routes/OrderNotice");
// **************************

// CORS config will be here

// ********************

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configure middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



//**********Api Call***************//

app.use("/M_Stock", M_StockRouter);
app.use("/OrderNotice", OrderNoticeRouter);


module.exports = app;


var port = 8080;
app.listen(port, ()=>{
    console.log("server running on port : ", port);
})