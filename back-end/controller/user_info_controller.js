const user_model= require('../module/login_model')


const {dataHandler} =require('../utils')

const islogin = (req,res,next) =>{
    if(req.session.userinfo) {
        res.render('user',{
            status:200,
            data:JSON.stringify({msg: '用户登录'})
        })
    }else {
        res.render('user',{
            status:201,
            data:JSON.stringify({msg:'用户未登录'})
        })
    }
}



const getUserInfo= async function(req,res,next){                  
    let user_info=await user_model.getUserInfoById(req.session.userinfo.userid)
    if(req.session.userinfo.userid) {     
        res.render('user',{
            status:200,
            data:JSON.stringify(user_info) 
        })
    }else{
        res.render('user',{
            status:201,
            data:JSON.stringify({
                msg:"登录后获取"    
            })
        })
    }

}

const exit = function(req,res){
    req.session.userinfo = null
    res.render('user',{status:200,data:JSON.stringify({
        msg:'退出成功'
    })
})


}

const check =function(req,res){
    let islogin=!! req.session.userinfo
    res.render('user',{
        status:islogin ?200:200,
        data:JSON.stringify({msg: islogin ?'已登录':'未登录'})
    })
}

module.exports={
    getUserInfo,
    exit,
    check,
    islogin
}