const express = require("express");
const movies_module = require("../module/movies_module")
const {dataHandler} = require("../utils")


const get = async(req,res)=>{
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await movies_module.get();//获取所有电影数据的方法
    dataHandler(_data,res,'movies')//返回的数据处理
}

const save = async(req,res)=>{
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await movies_module.save(req.body);//获取所有电影数据的方法
    dataHandler(_data,res,'movies')//返回的数据处理
}

const getMovieInfoById = async(req,res)=>{
    res.set('content-type', 'application/json; charset=utf8')
    console.log(req.query)
    let _data = await movies_module.getById(req.query);//根据请求的 query 返回单个信息的方法
    dataHandler(_data,res,'movies')//返回的数据处理
}

const delMovieInfoById = async(req,res)=>{
    res.set('content-type', 'application/json; charset=utf8')
    console.log(req.query)
    let _data = await movies_module.delById(req.query);//根据请求的 query 返回单个信息的方法
    dataHandler(_data,res,'movies')//返回的数据处理
}

const getMovieInfoByName= async(req,res)=>{
    res.set('content-type', 'application/json; charset=utf8')
    console.log(req.query)
    let _data = await movies_module.getByName(req.query.movieName);//根据请求的 query 返回单个信息的方法
    dataHandler(_data,res,'movies')//返回的数据处理
}

module.exports = {
    get:get,
    save:save,
    getById:getMovieInfoById,
    delById:delMovieInfoById,
    getByName:getMovieInfoByName

}
