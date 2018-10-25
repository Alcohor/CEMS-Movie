
import cinema_model from '../model/cinema_model'

import cinemaList_template from '../view/cinemaList.html'; 


const cinema = async (req,res,next) =>{
    
    let html = template.render(cinemaList_template,{
        data : (await cinema_model.list()).data
    })
    res.render(html)
    
}

const cinemaSave = async (req,res,next) =>{
    
    // let html = template.render(cinemaList_template,{
    //     data : (await cinema_model.list()).data
    // })
    // res.render(html)
    
}

export default{
    cinema,
    cinemaSave
}