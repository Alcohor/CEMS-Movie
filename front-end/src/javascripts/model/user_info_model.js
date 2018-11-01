
const islogin =() =>{
    return $.ajax({
        url:'/api/user_info/islogin',
        type:'get',
        success:(results) =>{
            return results
        }
    })
}

const getUserInfo =() =>{
    return $.ajax({
        url:'/api/user_info/info',
        type:'get',
        success:(results) =>{
            return results
        }
    })
}

const exit = () =>{
    return $.ajax({
        url:'/api/user_info/exit',
        type:'get',
        success:(results) =>{
            return results
        }

    })
}

const check = () =>{
    return $.ajax({
        url:'/api/user_info/check',
        type:'get',
        success:(results) =>{
            return results
        }

    })
}

module.exports={
    getUserInfo,
    check,
    exit,
    islogin
}