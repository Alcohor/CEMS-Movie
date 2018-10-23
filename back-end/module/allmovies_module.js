const mongoose = require('../utils/mongoose');
const Moment = require('moment');

var AllMovies = mongoose.model('allmovies', new mongoose.Schema({
    movieName:String,
    director:String,
    company:String,
    type:String,
    country:String,
    time:String,
    duringTime:String,
    language:String,
}));

const _get = ()=>{//获得所有电影数据
   return AllMovies.find({})//查找所有电影信息 *
            .then((results)=>{
                return results
            })
            .catch((err)=>{
                return false
            })
}

const _save = (data)=>{//获得所有电影数据
    let _timestamp = Date.now()
    let moment = Moment(_timestamp)
   return new AllMovies({
        ...data,
        createTime: _timestamp,
        formatTime: moment.format("YYYY-MM-DD, hh:mm")
   }).save()
   .then((results)=>{
        return results
    })
    .catch((err)=>{
        return false
    })
} 

module.exports = {
    get:_get,
    save:_save
}