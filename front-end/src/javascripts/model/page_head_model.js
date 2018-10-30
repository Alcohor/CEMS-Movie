import URL from 'url'

const pageHead = (url,preUrl) =>{
    let _urlinfo = URL.parse(url)
    let _pathname = _urlinfo.pathname
    let _search = URL.parse(preUrl).search
    let _infos = {
        '/home': {
            title:'首页',
            list:[]
        },
        '/cinema-list':{
            title:'影院列表',
            description:'影院详情',
            list:[
                {text:'影院详情'}
            ]
        },
        '/cinema-save':{
            title:'影院信息管理',
            description:'添加影院详情',
            list:[
                {text:'影院详情',path:'#/cinema-list'+_search},
                {text:'添加影院详情'}
            ]
        },

        '/cinema-update':{
            title:'影院信息管理',
            description:'更新影院详情',
            list:[
                {text:'影院详情',path:'#/cinema-list'+_search},
                {text:'添加影院详情'}
            ]
        },
        '/movies-list':{
            title:'影片列表',
            description:'影院详情',
            list:[
                {text:'影院详情'}
            ]
        },
        '/movies-save':{
            title:'影片管理',
            description:'添加影片详情',
            list:[
                {text:'影片列表',path:'#/movies-list'+_search},
                {text:'添加影片详情'}
            ]
        },
        '/movies-update':{
            title:'影片信息管理',
            description:'添加影片详情',
            list:[
                {text:'影片列表',path:'#/movies-list'+_search},
                {text:'影片更新'}
            ]
        }
    }
        return _infos[_pathname] ||{}
}

export default {
    pageHead
}