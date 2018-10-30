const userAuth = (req,res,next)=>{
    if(req.session.userinfo){
        next()
    }else{
        res.render('user',{
            code:403,
            status:JSON.stringify({ msg: '登录过期，请重新登录'})
        })
    }
}

module.exports ={
    userAuth
}