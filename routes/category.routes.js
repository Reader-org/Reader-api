const Category = require('../models/category.models');
const categoryController = require('../controllers/category.controller')
const router = require('express').Router();
const populator = require('../controllers/populator')

router.route('/get').get(categoryController.getAll);

router.route('/add').post(categoryController.add);

router.route('/del/:id').delete(categoryController.delete);



module.exports = router;