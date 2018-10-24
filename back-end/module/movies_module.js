const mongoose = require('../utils/mongoose');
const Moment = require('moment');

var Movies = mongoose.model('movies', new mongoose.Schema({
    movieName: String,//电影名称
    director: Array,//导演
    company: String,//发行公司
    type: Array,//类型
    country: String,//国家
    time: String,//上映时间
    year: String,
    duringTime: String,//时长
    language: String,//语言
    posterPic: String,//海报图片
    actor: Array,//演员
    intro: String,//简介
    createTime: String,//发布时间（毫秒）
    createTimeFormat: String,//（创建时间）

}));

const _get = () => {//获得所有电影数据
    return Movies.find({}).sort({ createTime: -1 })//查找所有电影信息 * 按照时间降序排列
        .then((results) => {
            return results
        })
        .catch((err) => {
            return false
        })
}

const _save = (data) => {//增加电影数据
    let _timestamp = Date.now()
    let moment = Moment(_timestamp)
    return new Movies({
        ...data,
        createTime: _timestamp,
        createTimeFormat: moment.format("YYYY-MM-DD, hh:mm")
    }).save()
        .then((results) => {
            return results
        })
        .catch((err) => {
            return false
        })
}

const getMovieInfoById = ({id}) => {//按照id查找
    return Movies.findById(id)
        .then((results) => {
            return results
        })
        .catch((err) => {
            return false
        })
}

const getMovieInfoByName = (name) => {
    
    console.log(name)
    
     return Movies.find({"movieName":{$regex: eval(`/${name}/ig`)}}).sort({ createTime: -1 })
        .then((results) => {
            console.log(results)
            return results
        })
        .catch((err) => {
            return false
        })
}

const delMovieInfoById = ({id}) => {//按照id删除
    return Movies.deleteOne({ _id: id })
        .then((results) => {
            results.deleteId = id;
            return results
        })
        .catch((err) => {
            return false
        })
}




module.exports = {
    get: _get,//取出全部
    save: _save,//增加数据
    getById:getMovieInfoById,//根据ID取出数据
    delById:delMovieInfoById,//根据ID删除数据
    getByName:getMovieInfoByName
}