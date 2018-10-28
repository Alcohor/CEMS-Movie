
//引入module层
const cinema_module = require('../module/cinema_module')

//引入错误处理
const {dataHandler} = require("../utils")

//列表显示
const list = async (req,res) => {
    res.set('content-type','application/json;charset=utf8')
    let _data = await cinema_module.list();
    dataHandler(_data,res,'cinema')//返回的数据处理
}

//添加影院
const save = async (req,res) =>{
    res.set('content-type','application/json;charset=utf8')
    let _data = await cinema_module.save(req.body);
    //判断是否插入成功
    dataHandler(_data,res,'cinema')//返回的数据处理
    
}

module.exports = {
    list,
    save

}