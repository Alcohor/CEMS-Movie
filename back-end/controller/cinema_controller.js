
//引入module层
const cinema_module = require('../module/cinema_module')

//引入错误处理
const {dataHandler} = require("../utils")

//列表显示
const list = async (req,res) => {
    res.set('content-type','application/json;charset=utf8')
    let _data = await cinema_module.list();
    if(_data) {
        res.render('cinema', { 
            status : 200 , 
            data : JSON.stringify(_data) 
        })
    }else{
        res.render('cinema', { 
            status : 500 , 
            data : JSON.stringify({
                'msg' : '发生了不可预知的错误'
            }) 
        })
    }
}

//添加影院
const save = async (req,res) =>{
    res.set('content-type','application/json;charset=utf8')
    let _data = await cinema_module.save(req.body);
    //判断是否插入成功
    if(_data) {
        res.render('cinema', { 
            status : 200 , 
            data : JSON.stringify(_data) 
        })
    }else{
        res.render('cinema', { 
            status : 500 , 
            data : JSON.stringify({
                'msg' : '发生了不可预知的错误'
            }) 
        })
    }
    
}

module.exports = {
    list,
    save

}