
var express = require('express');
var router = express.Router();
var cinema_controller = require('../controller/cinema_controller')

/* GET home page. */
router.get('/list', cinema_controller.list);
router.post('/save', cinema_controller.save);
router.get('/remove', cinema_controller.remove);
router.get('/selectID', cinema_controller.selectID);
router.post('/update', cinema_controller.update);

module.exports = router;