
import SMERouter from 'sme-router'


const cinemaList_template = require('../view/cinemaList.html');
const home_template = require('../view/home.html');
const notFound_template = require('../view/404.html');

var router = null;

//启动路由
const _init = () =>{

    router = new SMERouter('router-view')

    // 中间件会先执行
    router.use((req, res, next) => {
        _activeLink(req.route) 
    })

    router.route('/home',(req,res,next) =>{
        res.render(home_template)
    })
    router.route('/cinema',(req,res,next) =>{
        res.render(cinemaList_template)
    })
    router.route('/notFound',(req,res,next) =>{
        res.render(notFound_template)
        _navLink('.not-found a[to]')
    })
    
    //重定向
    router.route('*', (req, res, next) => {
        if ( req.url === '' ) { // 刚进入项目，没有hash值，重定向到home
            res.redirect('/home')
        }
        // } else { // 如果路径匹配不到，导向404
        //     res.redirect('/notFound')
        // }
    })




    _navLink();
}

//给导航添加事件
const _navLink = () =>{
    let navname = $('.sidebar-menu li[to]');
    navname.on("click",function(){
        //获取to的属性值
        let _path = $(this).attr('to');
        router.go(_path);
    })
}

 //给点击事件添加类名
 const _activeLink = (route) =>{
    let navname = $('.sidebar-menu li[to]')
     //根据不同的hash值来判断
     navname.filter(`[to='${route}']`)
             .addClass('active')
             .siblings()
             .removeClass('active')
}




export default {
    init : _init
};


