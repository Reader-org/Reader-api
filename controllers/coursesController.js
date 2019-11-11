exports.getAll = (req,res)=>{
    const courses = [
        {
            "title":"Android",
            "Description":"A course for the beiginners for android",
            "Author":"Mitch",
            "Github Url":"daggron"
        }
    ]

    res.status(200).json(courses);
}