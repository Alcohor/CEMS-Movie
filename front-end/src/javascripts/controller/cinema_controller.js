import { bus,handleToastByData } from '../util/index'
import cinema_model from '../model/cinema_model'

import cinemaList_template from '../view/cinemaList.html'; 
import cinemaList_save_template from '../view/cinema_save.html'; 

import qs from 'querystring'



const cinema = async (req,res,next) =>{
    
    let html = template.render(cinemaList_template,{
        data : (await cinema_model.list()).data
    })
    res.render(html);
    addClickEvent();//添加点击事件
}


const cinemaSave = async (req,res,next) =>{
    
    res.render(cinemaList_save_template)
    saveEvent();//添加按钮
}
//添加点击事件
const addClickEvent = () =>{
    $('.cinema-list #addbtn').on('click',function(){
        bus.emit('go','/cinema-save');
    })
}
//返回列表的事件
const saveEvent = () =>{
    //返回列表
    $('.returnCinemaList #returnList').on('click',function(){
        bus.emit('go','/cinema-list');
    })
    //表单提交
    $('#cineamSave-form').submit(handleSaveSubmit)
}

//表单提交方法
//连续点击的开关判断，防止多次提交
let _isLoading = false;

const handleSaveSubmit = async function (e){
    e.preventDefault()//阻止表单的默认提交
    if(_isLoading) return false;
    _isLoading =true 
    let datastr = $(this).serialize();//得到表单的数据
    let params = qs.parse(datastr)//转换为对象
    let _result = await cinema_model.save(params)
    _isLoading = false;
    handleToastByData(_result,{isRect :false})
}


export default{
    cinema,  
    cinemaSave
}