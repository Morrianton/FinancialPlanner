// imported modules
const EXPRESS = require('express');
const MONGOOSE = require('mongoose');
const BODY_PARSER = require('body-parser');
const CORS = require('cors');
const PATH = require('path');

const APP = EXPRESS();
const ROUTE = require('./routes/route');

// connect to MongoDB
MONGOOSE.connect('mongodb://localhost:27017/FinancialPlanner');

// on successful connection to Mongo database
MONGOOSE.connection.on('connected', ()=> {
    console.log("Connected to database MongoDB @ 27017");
})

// on connection error to Mongo database
MONGOOSE.connection.on('error', (err)=> {
    if(err)
    {
        console.log("Database connection error:" + " " + err);
    }
})

// port
const PORT = 3000;

// middlware
APP.use(CORS());
APP.use(BODY_PARSER.json());
APP.use('/api', ROUTE);

// server listen on designated port
APP.listen(PORT, ()=>{
    console.log("Server listening on port" + " " + PORT);
})

