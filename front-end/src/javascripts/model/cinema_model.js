
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
const save = (data) => {
    return $.ajax({
        url: '/api/cinema/save',
        type : 'post',
        data,//要传数据！！！！找了半天！！！
        success:(results) => {
           return results
        }
    })
}

//删除列表
const remove = (data) => {
    return $.ajax({
        url: '/api/cinema/remove',
        data,
        success:(results) => {
           return results
        }
    })
}

//根据ID查找信息（修改信息）
const selectID = (data) => {
    return $.ajax({
        url: '/api/cinema/selectID',
        data,
        success:(results) => {
           return results
        }
    })
}

//修改的提交
const update = (data) => {
    return $.ajax({
        url: '/api/cinema/update',
        type : 'post',
        data,
        success:(results) => {
           return results
        }
    })
}


export default {
    list,
    save,
    remove,
    selectID,
    update
}