let Courses = require('../models/courses.model');

exports.getCourses = (req,res)=>{
    Courses.find()
    .select('_id title Instructor Description Language image Level')
    .exec()
    .then(data=>{
        let courses = data.map(eachcourse=>{
            return {
                id:eachcourse._id,
                title:eachcourse.title,
                Instructor:eachcourse.Instructor,
                Description:eachcourse.Description,
                Language:eachcourse.Language,
                image:eachcourse.image,
                Level:eachcourse.Level,
                request:{
                    type:'GET',
                    Url:`http://localhost:5000/courses/get/${eachcourse._id}`
                }
            }
        }) 
        res.status(200).json({
            message:'Courses found successfully',
            length:courses.length,
            courses:courses
        });
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
    .select('_id title Instructor Description Language Url image Level')
    .exec()
    .then(course=>{
        if(course){
            let data = {
                id:course._id,
                title:course.title,
                Instructor:course.Instructor,
                Description:course.Description,
                Language:course.Language,
                image:course.image,
                Level:course.Level,
                request:{
                    type:'GET',
                    Url:`${course.Url}`
                }
            }
            res.status(200).json({
                message:'Course found successful',
                course:data
            })
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