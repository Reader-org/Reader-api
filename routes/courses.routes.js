const router = require('express').Router();
const courseControllers = require('../controllers/coursesController');

router.route('/get/').get(courseControllers.getCourses);

router.route('/get/:id').get(courseControllers.getById);

router.route('/post').post(courseControllers.postCourse);

router.route('/delete/:id').delete(courseControllers.deleteCourse);

module.exports = router;