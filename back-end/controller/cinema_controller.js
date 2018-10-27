
//引入module层
const cinema_module = require('../module/cinema_module')


const list = (req,res) =>{
    res.set('content-type','application/json;charset=utf8')
    res.render('cinema', { status : 200 , data : JSON.stringify( cinema_module.list() ) })
}

module.exports = {
    list
}