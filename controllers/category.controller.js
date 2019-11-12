const Category = require('../models/category.models');

exports.getAll = (req,res)=>{
    Category.find()
    .sort({
        name:1
    })
    .select('name icon')
    .exec()
    .then(result=>{
        let Category=result.map(data=>{
            return{
                id:data._id,
                name:data.name,
                icon:data.icon
            }
        });

        res.status(200).json({
            length:Category.length,
            Category:Category
        });
    })
    .catch(err=>{
        return res.status(500).json({
            message:'Internal Server Error'
        })
    })
}


exports.add = (req,res)=>{
    let category = new Category();
    category.name = req.body.name;
    category.icon = req.body.icon;
    category.save()
    .then(()=>{
        res.status(200).json({
            message:'Category Added successfully'
        });
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            message:'Internal server Error'
        })
    })
}


exports.delete = (req,res)=>{
    Category.findByIdAndDelete(req.params.id)
    .then(()=>{
        return res.status(200).json({
            message:'Deleted Successfully'
        })
    })
    .catch(err=>{
        console.log(err);
        res.json({
            message:'Error while deleting the category'
        })
    })
}