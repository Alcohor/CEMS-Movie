const express = require("express");
const allmovies_module = require("../module/allmovies_module")
const {isSuccess} = require("../utils")


const get = async(req,res)=>{
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await allmovies_module.get();//获取所有电影数据的方法
    let successFlag = isSuccess(_data,res,"allmovies")
    if(successFlag){
        res.render('allmovies',{
            status:200,
            data:JSON.stringify(_data)
        })
    }
}

const save = async(req,res)=>{
    res.set('content-type', 'application/json; charset=utf8')
    console.log(req,1)
    let _data = await allmovies_module.save(req.body);//获取所有电影数据的方法
    let successFlag = isSuccess(_data,res,"allmovies")
    if(successFlag){
        res.render('allmovies',{
            status:200,
            data:JSON.stringify(_data)
        })
    }
}

module.exports = {
    get:get,
    save:save
}
