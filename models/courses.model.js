const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    Instructor:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Url:{
        type:String,
    },
    Language:{
        type:String,
    },
    Date:{
        type:String,
        required:true,
        default:Date.now()
    },
    Github:{
        type:String
    },
    image:{
        type:String
    },
    Level:{
        type:String
    },
    Category:{
        type:String,
    }

},{
    timestamps:true
});


module.exports = mongoose.model('Courses',schema);