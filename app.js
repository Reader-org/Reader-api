const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');

app.use(express.json());

app.use(cors());

app.use(morgan('dev'));


app.use('/courses/',require('./routes/courses.routes'));

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