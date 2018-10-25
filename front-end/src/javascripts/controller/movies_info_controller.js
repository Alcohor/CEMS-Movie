import movies_model from '../model/movies_info_model';
import movies_info_template from '../view/movies_info.html'
import movies_add_template from '../view/movies_add.html'
import bus from '../util/bus'
//列表渲染控制器
const list = async(req,res,next)=>{
    let html = template.render(movies_info_template, {
        data: (await movies_model.getAllMoviesInfo()).data // 获取到列表数据
    })
    res.render(html)
    bindListEvent()
}

const add = async(req,res,next)=>{
    let html = template.render(movies_info_template, {
        data: (await movies_model.getAllMoviesInfo()).data // 获取到列表数据
    })
    res.render(html)
}
const showAddMovie = (req,res,next)=>{
    console.log(1)
    let html = template.render(movies_add_template ,{
    })
    res.render(html)
}

const bindListEvent = () => {
    // 添加按钮点击跳转到添加路由
    $('#addbtn').on('click', function () {
        console.log(bus)
        bus.emit('go','/movies-add')
    })
    $('.movies-update').on('click', function () {
        let id = $(this).parents('tr').data('id')
        bus.emit('go','/position-update', { id })
    })
    // $('movies.remove').on('click', handleRemovePosition)
}

export default{
    list,
    add,
    showAddMovie
}