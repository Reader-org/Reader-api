const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const postAll = require('./controllers/populator');
require('dotenv').config();

app.use(express.json());

app.use(cors());

app.use(morgan('dev'));

const URL = process.env.MONGODB;

mongoose.connect(URL,({
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}));

mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.once('open',()=>{
    console.log('Db connected to app bro');
});

db.on('error',(err)=>{
    console.log(`There is an error while connecting to db ${err}`);
});


app.use('/courses/',require('./routes/courses.routes'));
app.use('/category',require('./routes/category.routes'));

app.use((req,res,next)=>{
    let error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error , req,res,next)=>{
    res.status(error.status || 500).json({
        message: error.message,
    });
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server Started On Port ${port}`);
});