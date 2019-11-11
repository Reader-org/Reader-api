const router = require('express').Router();
const courseControllers = require('../controllers/coursesController');

router.route('/post/course').post(courseControllers.postCourse);

module.exports = router;