
var express = require('express');
var router = express.Router();
var cinema_controller = require('../controller/cinema_controller')
//文件上传的引入
var fileUpload = require('../middleware/cinemaPicUpload')

/* GET home page. */
router.get('/list', cinema_controller.list);
router.post('/save',fileUpload,cinema_controller.save);
router.get('/remove', cinema_controller.remove);
router.get('/selectID', cinema_controller.selectID);
router.post('/update', cinema_controller.update);

module.exports = router;