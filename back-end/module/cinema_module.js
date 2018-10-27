
const mongoose = require('../utils/mongoose')
//引入处理时间戳
const Moment = require('moment');

var Cinema = mongoose.model('cinemas', new mongoose.Schema({
    name : String,//影院名称
    city : String,//影院地点
    boxOffice : String,//票房
    createTime : String,//发布时间
    formaTime : String
}));

const list = () => {
    return Cinema.find({}).
    then((results) => {
        return results
    }).
    catch((err) => {
        return false
    })
}  

//添加影院数据
 const save = (body) => {
    let _timestamp = Date.now()
    let moment = Moment(_timestamp)
    return new Cinema({  
        ...body,
        createTime : _timestamp,
        formaTime : moment.format("YYYY-MM-DD, hh:mm")
        
    }).save() 
        .then((results) => {
            console.log(results)
            return results
        })
        .catch((err) => {
            return false
        })




 }

module.exports = {
    list,
    save
}