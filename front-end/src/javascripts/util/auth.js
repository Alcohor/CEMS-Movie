const URL = require ('url')

const _none =() =>{}

import user_model from '../model/user_info_model'
// import user_info_controller from '';


const userloginstatus= async () =>{
    let islogin = await user_model.islogin()
    return !!(islogin.status ===200)
}

const userLoginAuth = async (success = _none, fail =_none) =>{
    let auth =await userloginstatus()

    if(auth) {
        success(auth)
        return true
    }else{
        fail()
        return false
    }
}

export {
    userloginstatus,
    userLoginAuth
}