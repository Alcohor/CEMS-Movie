const user_model = require('../module/user_model')

const islogin = (req,res,next) =>{
    if(req.session.uerinfo){
        res.render('user',{
            code:200,
            status:JSON.stringify({ msg:'用户已登录'})
        })
    }else {
        res.render('user',{
            code:201,
            status:JSON.stringify({ msg:'用户未登录'})
        })
    }
}

    const info = async (req,res) =>{
        let _result = await user_model.getUserInfoById(req.session.userinfo.userid)

        res.render('user',{
            code:200,
            status:JSON.stringify({
                userid:_result._id,
                username:_result.username,
                tel:_result.tel
            })
        })
    }

module.exports ={
    islogin,
    info

}