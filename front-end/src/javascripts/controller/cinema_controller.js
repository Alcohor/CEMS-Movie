import { bus,handleToastByData } from '../util/'

import cinemaList_template from '../view/cinemaList.html'; 
import cinemaList_save_template from '../view/cinema_save.html'; 

import cinema_model from '../model/cinema_model'
import qs from 'querystring'



const cinema = async (req,res,next) =>{
    
    let html = template.render(cinemaList_template,{
        data : (await cinema_model.list()).data
    })
    res.render(html);
    addClickEvent();//添加点击事件
}

//影院添加
const cinemaSave = async (req,res,next) =>{
    
    res.render(cinemaList_save_template)
    saveEvent();//添加按钮
}
//添加点击事件
const addClickEvent = () =>{
    //列表跳转页面
    $('.cinema-list #addbtn').on('click',function(){
        bus.emit('go','/cinema-save');
    })

    //点击删除
    $('.pos-remove').on('click', removeCinemaListEvent)
}
//删除影院列表事件
const removeCinemaListEvent = async function () {
    //删除影院信息
    let id = $(this).parents('tr').data('id')
    console.log(id)
    let _data = await cinema_model.remove({ id : id })
    handleToastByData(_data,{
        isReact: false,
        success: (data) => {
            // 删除成功
            console.log(data)
            
            bus.emit('go', '/cinema-list?_='+data.deleteid)
        }
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