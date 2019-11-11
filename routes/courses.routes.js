const router = require('express').Router();
const courseControllers = require('../controllers/coursesController');

router.route('/get/all').get(courseControllers.getAll);

module.exports = router;