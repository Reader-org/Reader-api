let Courses = require('../models/courses.model');

exports.getCourses = (req,res)=>{
    Courses.find()
    .exec()
    .then(courses=>{
        res.status(200).json(courses);
    })
    .catch(err=>{
        console.log('Code Red'+err);
        res.status(404).json({
            message:err
        });
    });
}

exports.getById = (req,res)=>{
    Courses.findById(req.params.id)
    .exec()
    .then(course=>{
        if(course){
            res.status(200).json(course)
        }
        else{
            res.status(404).json({
                message:'Course Not Found'
            })
        }
    })
    .catch(err=>{
        console.error(err)
        res.status(500).json({
            message:'Internal Server Error'
        })
    })
}

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

exports.deleteCourse = (req,res)=>{
    Courses.findByIdAndDelete(req.params.id)
    .exec()
    .then(()=>{
        res.status(200).json({
            message:'Course deleted successfully'
        });
    })
    .catch(err=>{
        console.info('Code red');
        console.error(err);
        res.status(500).json({
            message:'Internal server error'
        })
    })
}