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
    bindSaveEvent()
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
    $('movies.remove').on('click', handleRemoveMovies)
}

const bindSaveEvent = () => {
    // 返回按钮逻辑
    $('#back').on('click', function () {
        bus.emit('go', '/movies')
    })
    $('#save-form').submit(handleSaveSubmit)
}
 
const handleRemoveMovies = ()=>{
    
}





let _isLoading = false;

const handleSaveSubmit = async function (e){
    e.preventDefault()
    if(_isLoading) return false;
    console.log("save")
    _isLoading =true
    let result = await movies_model.addMovieInfo()
    _isLoading = false;
    
}


export default{
    list,
    add,
    showAddMovie
}