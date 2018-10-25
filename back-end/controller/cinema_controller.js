
//引入module层
const cinema_module = require('../module/cinema_module')

//列表显示
const list = (req,res) =>{
    res.set('content-type','application/json;charset=utf8')
    res.render('cinema', { status : 200 , data : JSON.stringify( cinema_module.list() ) })
}

//添加影院
const save = (req,res) =>{
    res.set('content-type','application/json;charset=utf8')
    cinema_module.save(req.body)
    res.render('cinema', { 
        status : 200 , 
        data : JSON.stringify( [] ) 
    })
}

module.exports = {
    list,
    save

}