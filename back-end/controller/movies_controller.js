const express = require("express");
const movies_module = require("../module/movies_module")
const {isSuccess} = require("../utils")


const get = async(req,res)=>{
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await movies_module.get();//获取所有电影数据的方法
    let successFlag = isSuccess(_data,res,"movies")
    if(successFlag){
        res.render('movies',{
            status:200,
            data:JSON.stringify(_data)
        })
    }
}

const save = async(req,res)=>{
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await movies_module.save(req.body);//获取所有电影数据的方法
    let successFlag = isSuccess(_data,res,"movies")//成功返回true，失败返回false
    if(successFlag){
        res.render('movies',{
            status:200,
            data:JSON.stringify(_data)
        })
    }
}

const getMovieInfoById = async(req,res)=>{
    res.set('content-type', 'application/json; charset=utf8')
    console.log(req.query)
    let _data = await movies_module.getById(req.query);//根据请求的 query 返回单个信息的方法
    let successFlag = isSuccess(_data,res,"movies")//成功返回true，失败返回false
    if(successFlag){
        res.render('movies',{
            status:200,
            data:JSON.stringify(_data)
        })
    }
}

const delMovieInfoById = async(req,res)=>{
    res.set('content-type', 'application/json; charset=utf8')
    console.log(req.query)
    let _data = await movies_module.delById(req.query);//根据请求的 query 返回单个信息的方法
    let successFlag = isSuccess(_data,res,"movies")//成功返回true，失败返回false
    if(successFlag){
        res.render('movies',{
            status:200,
            data:JSON.stringify(_data)
        })
    }
}

module.exports = {
    get:get,
    save:save,
    getById:getMovieInfoById,
    delById:delMovieInfoById
}
