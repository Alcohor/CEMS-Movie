
//列表数据
const list = () => {
    return $.ajax({
        url: '/api/cinema/list',
        success:(results) => {
           return results
        }
    })
}

//表单提交
const save = () => {
    return $.ajax({
        url: '/api/cinema/save',
        type : 'post',
        success:(results) => {
           return results
        }
    })
}



export default {
    list,
    save
}