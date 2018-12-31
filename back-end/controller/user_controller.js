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
//列表显示
const list = async (req,res) =>{
    res.set('content-type','application/json; charset=utf-8')
    let _data = await user_info_model.list(req.query)
    console.log(req.query)
    dataHandler(_data,res,"user")
}
module.exports ={
    islogin,
    info,
    list

}