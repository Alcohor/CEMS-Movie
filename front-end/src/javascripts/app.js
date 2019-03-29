//引入样式
import '../stylesheets/app.scss'
//引入路由
import router from './router'

import user_info_controller from './controller/user_info_controller'

const body_template = require('./view/body.html')

import { userLoginAuth} from './util/auth'

//渲染页面
$('#wrapper').html(body_template);

userLoginAuth((auth) =>{
    router.init(); 
    user_info_controller.renderuserStatus()
},()=>{
    window.location.href = '/login.html'
})



