import bus from '../util/bus'
import cinema_model from '../model/cinema_model'

import cinemaList_template from '../view/cinemaList.html'; 
import cinemaList_save_template from '../view/cinema_save.html'; 



const cinema = async (req,res,next) =>{
    
    let html = template.render(cinemaList_template,{
        data : (await cinema_model.list()).data
    })
    res.render(html);
    addClickEvent();
    
}

const cinemaSave = async (req,res,next) =>{
    
    res.render(cinemaList_save_template)
    returnListEvent();
}

//添加点击事件
const addClickEvent = () =>{
    $('.cinema-list #addbtn').on('click',function(){
        bus.emit('go','/cinema-save');
    })
}
const returnListEvent = () =>{
    $('.returnCinemaList #returnList').on('click',function(){
        bus.emit('go','/cinema-list');
    })
}

export default{
    cinema,
    cinemaSave
}