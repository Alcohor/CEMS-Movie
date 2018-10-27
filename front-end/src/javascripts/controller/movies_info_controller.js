import movies_model from '../model/movies_info_model';
import movies_info_template from '../view/movies_info.html'
import movies_add_template from '../view/movies_add.html'
import note_found_template from '../view/movie_search_404.html'
import movies_updata_template from '../view/movies_updata.html'
import bus from '../util/bus'
import getPath from '../util/getPath'

//列表渲染控制器
const list = async (req, res, next) => {
    let html = template.render(movies_info_template, {
        data: (await movies_model.getAllMoviesInfo()).data // 获取到列表数据
    })
    res.render(html)
    bindListEvent()
    bindSearchEvent()
}
//添加方法
const add = async (req, res, next) => {
    let html = template.render(movies_info_template, {
        data: (await movies_model.getAllMoviesInfo()).data // 获取到列表数据
    })
    res.render(html)
}

//显示添加电影页面
const showAddMovie = (req, res, next) => {
    
    let html = template.render(movies_add_template, {})
    res.render(html)
    bindSaveEvent()  
}

const update = async (req, res) => {
    let { id } = req.body// 要更新的数据的id
    // 获取id对应的数据进行渲染
    let html = template.render(movies_updata_template, {
        data: (await movies_model.searchMoviesById({ id })).data // 获取到列表数据
    })
    res.render(html)
    bindUpdataEvent()
}


//绑定列表按钮点击事件
const bindListEvent = () => {
    // 添加按钮点击跳转到添加路由
    $('#addbtn').on('click', function () {
        bus.emit('go', '/movies-add')
    })
    $('.movies-update').on('click', function () {
        let _id = $(this).parents('tr').data('id')
        bus.emit('go', '/movies-update', {id:_id})
    })
    $('.movies-remove').on('click', handleRemoveMovies)
}

//绑定保存页面事件
const bindSaveEvent = () => {
    // 返回按钮逻辑
    $('#back').on('click', function () {
        bus.emit('go', '/movies')
    })
    $('#posterPic').on('change',function(){
        var oFReader = new FileReader();
			var file =  $(this).get(0).files[0];
			oFReader.readAsDataURL(file);
			oFReader.onloadend = function(oFRevent){
				var _src = oFRevent.target.result;
				$('#posterPicPreView').css("background-image",`url(${_src})`)
		    }
    })
    $('#save-form').submit(handleSaveSubmit)
}

//绑定修改页面提交事件
const bindUpdataEvent = () => {
    // 返回按钮逻辑
    $('#back').on('click', function () {
        bus.emit('go', '/movies')
    })
   
    $('#posterPic').on('change',function(){
        var oFReader = new FileReader();
			var file =  $(this).get(0).files[0];
			oFReader.readAsDataURL(file);
			oFReader.onloadend = function(oFRevent){
				var _src = oFRevent.target.result;
				$('#posterPicPreView').css("background-image",`url(${_src})`)
		    }
    })
    $('#updata-form').submit(handleUpdataSubmit)
}

//绑定搜索点击事件
const bindSearchEvent = () => {
    // 返回按钮逻辑
    $('#searchBtn').on('click', handleSearchMovies)
   
}

// const bindUpdataEvent = ()=>{
//     movies-update
// }


//处理删除操作
const handleRemoveMovies = async function () {

    let _id = $(this).parents("tr").data("id");
    let info = await movies_model.deleteMovieInfo({
        id: _id
    });
    $(this).parents("tr").hide(300).remove()

}


//处理搜索
const handleSearchMovies = async function () {

    let _name = $('#keywords').val();
    if (_name === ''){
        bus.emit('go', '/movies/#/' +new Date().getTime())
        return false
    }
    let searchData = await movies_model.searchMoviesByName({
        movieName : _name
    });
    console.log(searchData)
    let html = ''
    if(JSON.stringify(searchData.data)=='[]'||searchData.status==='500'){
        console.log(500)
        html = template.render(note_found_template,{})
        $('#disWrap').html(html)
    }else{

        html = template.render(movies_info_template,{data:searchData.data})
        $('#router-view').html(html)
        bindListEvent()
        bindSearchEvent()
        $('#keywords').val(_name);
    }

}

//开关
let _isLoading = false;
//处理点击保存提交事件
const handleSaveSubmit = async function (e) {
    e.preventDefault()
    if (_isLoading) return false;
    console.log("save")
    _isLoading = true
    let result = await movies_model.addMovieInfo()
    _isLoading = false;

}



const handleUpdataSubmit = async function (e) {
    e.preventDefault()
    if (_isLoading) return false;
    console.log("updata")
    _isLoading = true
    let result = await movies_model.updataMovieInfo()
    _isLoading = false;

}


export default {
    list,
    add,
    showAddMovie, 
    update,
    handleUpdataSubmit  
    
}