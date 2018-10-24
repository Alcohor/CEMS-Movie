
import '../stylesheets/app.scss'

const body_template = require('./view/body.html')
const cinemaList_template = require('./view/cinemaList.html')

//渲染页面
$('#wrapper').html(body_template);
$('#content-view').html(cinemaList_template);

