# SuperCourse-api
An api for getting the list of somecourses which help the viewrs to understand concepts in an efficient manner

## The Api is live at https://sudocourses.herokuapp.com/


## Api End Points Are

+ ### /courses/get
    ```
    Method : 'Get'

    This will fetch all the courses from the api in json format

    result of this endpoint is as folows

    {
    "message": "Courses found successfully",
    "length": 19,
    "courses": [
        {
            "id": "5dcae16251a98c04d9e5746d",
            "title": "Android Basics With Mitch",
            "Instructor": "Mitch",
            "Description": "Android Basics Course for Beginners",
            "Language": "English",
            "image": "https://cdn.pixabay.com/photo/2019/10/17/09/18/robot-in-space-4556429_960_720.png",
            "Level": "Intermediate,Beginner",
            "Category": "Android",
            "request": {
                "type": "GET",
                "Url": "http://sudocourses.herokuapp.com/courses/get/5dcae16251a98c04d9e5746d"
            }
        },
        {
            "id": "5dcae16251a98c04d9e5746e",
            "title": "Aws Getting Started",
            "Instructor": "Andrew Brown",
            "Description": "This course will help you become an AWS Certified Cloud Practitioner. You will get a complete understanding of the AWS Cloud platform and be prepared to take the certification exam. ",
             "Language": "English",
            "image": "https://cdn.pixabay.com/photo/2019/10/17/09/18/robot-in-space-4556429_960_720.png",
            "Level": "Intermediate,Beginner",
            "Category": "Aws",
            "request": {
                "type": "GET",
                "Url": "http://sudocourses.herokuapp.com/courses/get/5dcae16251a98c04d9e5746e"
            }
        }
    ]
    }

    ```

+ ### courses/get/:id

 ```
    Method : 'Get'
    
    This Method will return the entire data of the specific course

    The result of this api endpoint  is as follows
    {
    "message": "Course found successful",
    "course": {
        "id": "5dcae16251a98c04d9e5746d",
        "title": "Android Basics With Mitch",
        "Instructor": "Mitch",
        "Description": "Android Basics Course for Beginners",
        "Language": "English",
        "image": "https://cdn.pixabay.com/photo/2019/10/17/09/18/robot-in-space-4556429_960_720.png",
        "Level": "Intermediate,Beginner",
        "Category": "Android",
        "request": {
            "type": "GET",
            "Url": "https://www.youtube.com/watch?v=4NDwINudmDk&list=PLgCYzUzKIBE8TUoCyjomGFqzTFcJ05OaC"
        }
    }
}

 ```


 + ### courses/get/category/:category

  ```
  Method : `Get`

  This Will return all the courses of the particular category

  {
    "message": "Courses found successfully",
    "length": 2,
    "courses": [
        {
            "id": "5dcaebfbc9583939587b712c",
            "title": "Sass By FCC",
            "Instructor": "Free Code Camp",
            "Description": "Learn Sass in this 3 Hours long course by free code camp",
            "Language": "English",
            "image": "https://cdn.pixabay.com/photo/2019/10/17/09/18/robot-in-space-4556429_960_720.png",
            "Level": "Intermediate",
            "Category": "Sass",
            "request": {
                "type": "GET",
                "Url": "http://sudocourses.herokuapp.com/courses/get/5dcaebfbc9583939587b712c"
            }
        },
        {
            "id": "5dcaebfbc9583939587b712b",
            "title": "Sass by Design Course ",
            "Instructor": "Design Course",
            "Description": "Learn Sass with the best Ui/Ux designer on youtube",
            "Language": "English",
            "image": "https://cdn.pixabay.com/photo/2019/10/17/09/18/robot-in-space-4556429_960_720.png",
            "Level": "Beginner",
            "Category": "Sass",
            "request": {
                "type": "GET",
                "Url": "http://sudocourses.herokuapp.com/courses/get/5dcaebfbc9583939587b712b"
            }
        }
    ]
}

  ```



