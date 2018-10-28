const mongoose = require("../utils/mongoose");
//引入处理时间戳
const Moment = require("moment");

//创建model模型
var Cinema = mongoose.model("cinemas",new mongoose.Schema({
    name: String, //影院名称
    city: String, //影院地点
    boxOffice: String, //票房
    createTime: String, //发布时间
    formaTime: String
  })
);

//返回影院的列表
const list = () => {
  let _query = {}; ////查询的约定条件
  return Cinema.find(_query)
    .sort({ createTime: -1 }) //按时间降序排列
    .then((results) => {
        console.log('module is ok')
      return results
    })
    .catch((err) => {
      return false;
    });
};
//返回列表结束

//保存添加影院数据
const save = (body) => {
  let _timestamp = Date.now(); //保存时间
  let moment = Moment(_timestamp);
  return new Cinema({
    ...body,
    createTime: _timestamp,
    formaTime: moment.format("YYYY-MM-DD, hh:mm")
  })
    .save()
    .then((results) => {
      return results;
    })
    .catch((err) => {
      return false;
    });
};
//添加影院结束

//删除影院信息
const remove = ( { id } ) => {//传入iD删除这条信息
  //数据库操作删除，Cinema是数据库模板
   //数据库中存的是_id所以要找到_id中的id
  return Cinema.deleteOne({ _id: id }).then( (results) => {
    results.deleteid = id //找到这个id
    return results;
  }).catch( (err) => {
    return false;
  })
 
}

//删除影院信息结束

module.exports = {
  list,
  save,
  remove
};
