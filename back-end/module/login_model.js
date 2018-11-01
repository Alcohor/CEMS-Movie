
const mongoose = require('../utils/mongoose')
const { hash } =require ('../utils')
// const Moment = require("moment")
const bcrypt = require('bcrypt')

var User = mongoose.model('users', new mongoose.Schema({
    personal_image:String,
    username:String,
    password:String,
    tel : String,
    registerTime:String
})
);

// const register = async({ username,password,tel}) =>{
//     let _password = await hash(password)


//     // //生成salt的迭代次数 
//     // const saltRounds = 10; //随机生成salt
//     // const salt = bcrypt.genSaltSync(saltRounds);
//     //  //获取hash值 
//     //  var hash = bcrypt.hashSync(password, salt); 
//     //  //把hash值赋值给password变量 
//     //  var _password = hash;
//     return new User({
//         username,
//         password:_password,
//         tel,
//         registerTime:Date.now()
//     })
//     .save()
//     .then((results) => {
//         let { _id , username,tel} = results
//         return { _id , username,tel}
//     })
//     .catch(() => {
//         return false
//     })


// }


// 注册，存入数据到数据库password
const register = async ({ username, password, tel}) => {
    let _password = await hash(password)
    // 应该对密码进行加密之后再存储，可以利用node内置模块crypto，
    return new User({
        username,
        tel,
        password: _password,
        signupTime: Date.now()
    })
    .save()
    .then((results) => {
        let { _id, username, tel } = results
        return { _id, username, tel }
    })
    .catch(() => {
        return false
    })
}

//登录  判断密码是否匹配
const login =( pwd,{password})=>{
    return bcrypt.compareSync(pwd, password)
}

const judgeUserByusername = (username) =>{
    return User
    .find({username})
    .then((results)=>{
        return results
    })
    .catch(()=>{
        return false
    })
}

// 通过用户名验证是否有这个用户
const getUserInfoById = (id) => {
    return User
    .find({ _id: id })
    .then((results) => {
        let { _id, username, tel } = results[0]
        return {
            _id, username, tel
        }
    })
    .catch(() => {
        return false
    })         
}

module.exports ={
    register,
    login,
    judgeUserByusername,
    getUserInfoById
}


