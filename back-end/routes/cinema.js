
var express = require('express');
var router = express.Router();
var cinema_controller = require('../controller/cinema_controller')

/* GET home page. */
router.get('/list', cinema_controller.list);
router.post('/save', cinema_controller.save);

module.exports = router;