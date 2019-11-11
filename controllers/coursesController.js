let Courses = require('../models/courses.model');

exports.postCourse = (req,res)=>{
    let course = new Courses();
    course.title = req.body.title;
    course.Instructor = req.body.Instructor;
    course.Description = req.body.Description;
    course.Url = req.body.Url;
    course.Language = req.body.Language;
    course.github = req.body.Github;
    course.image = req.body.image || 'https://cdn.pixabay.com/photo/2019/10/17/09/18/robot-in-space-4556429_960_720.png';
    course.Level = req.body.Level;
    course.save()
    .then(()=>{
        console.log(course);
        res.status(200).json({
            message:'Course Saved successfully'
        });
    })
    .catch((err)=>{
        console.log(err);
        res.status(401).json({
            message:err
        })
    })
}