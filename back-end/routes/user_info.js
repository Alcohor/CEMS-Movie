var express =require('express')

var router = express.Router()

var user_info_controller= require('../controller/user_info_controller')

var { resApplicationJson} = require('../middleware')


router.use(resApplicationJson)

router.get('/info',user_info_controller.getUserInfo)

router.get('/exit',user_info_controller.exit)

router.get('/check',user_info_controller.check)

router.get('/islogin',user_info_controller.islogin)

module.exports = router