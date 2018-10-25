
const mongoose = require('../utils/mongoose')

const list = () => {
    return [
        {
            "logger": {
                "traceCapable": true,
                "name": "com.lagou.entity.mobile.MobilePosition"
            },
            "positionId": 4204836,
            "positionName": "数据仓库-成都",
            "city": "成都",
            "createTime": "今天 09:33",
            "salary": "15k-30k",
            "companyId": 50702,
            "companyLogo": "i/image/M00/6A/05/Cgp3O1gW8zSAUwUsAABMptH-XY087.jpeg",
            "companyName": "美团点评",
            "companyFullName": "北京三快在线科技有限公司"
        },
        {
            "logger": {
                "traceCapable": true,
                "name": "com.lagou.entity.mobile.MobilePosition"
            },
            "positionId": 4197421,
            "positionName": "android高级开发工程师",
            "city": "深圳",
            "createTime": "今天 09:32",
            "salary": "10k-20k",
            "companyId": 119456,
            "companyLogo": "i/image/M00/13/CA/Cgp3O1bn9LKAGAYGAAAkatw-nec324.png",
            "companyName": "云之梦科技",
            "companyFullName": "深圳市云之梦科技有限公司"
        },
        {
            "logger": {
                "traceCapable": true,
                "name": "com.lagou.entity.mobile.MobilePosition"
            },
            "positionId": 4200882,
            "positionName": "运维主管",
            "city": "深圳",
            "createTime": "今天 09:32",
            "salary": "15k-28k",
            "companyId": 119456,
            "companyLogo": "i/image/M00/13/CA/Cgp3O1bn9LKAGAYGAAAkatw-nec324.png",
            "companyName": "云之梦科技",
            "companyFullName": "深圳市云之梦科技有限公司"
        },
        {
            "logger": {
                "traceCapable": true,
                "name": "com.lagou.entity.mobile.MobilePosition"
            },
            "positionId": 4321822,
            "positionName": "助理工程师",
            "city": "深圳",
            "createTime": "今天 09:32",
            "salary": "5K-9K",
            "companyId": 351792,
            "companyLogo": "i/image/M00/8E/87/CgpEMlrpZW2AJgJqAABEOPBeI-4698.png",
            "companyName": "深圳市远视科技",
            "companyFullName": "深圳市远视科技有限公司"
        },
        {
            "logger": {
                "traceCapable": true,
                "name": "com.lagou.entity.mobile.MobilePosition"
            },
            "positionId": 4211357,
            "positionName": "电脑网-广告销售经理",
            "city": "广州",
            "createTime": "今天 09:32",
            "salary": "15k-20k",
            "companyId": 992,
            "companyLogo": "image1/M00/00/05/CgYXBlTUWACAEirfAABRQiJOrU4446.jpg",
            "companyName": "太平洋网络有限公司",
            "companyFullName": "广州太平洋电脑信息咨询有限公司"
        }
    ]
}  

//添加影院数据
 const save = (body) =>{
    var Cinema = mongoose.model('cinema', new mongoose.Schema({
        name : String,//影院名称
        city : String,//影院地点
        boxOffice : String,//票房
        createTime : String,//发布时间
       
    }));

    new Cinema({
        ...body,
        createTime : Date.new(),
        
    }).save()
        .then((result) => {
            console.log('result:', result)
        })
        .catch(() =>{
            console.log('err:', err)
        })




 }

module.exports = {
    list,
    save
}