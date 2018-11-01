 const mongoose = require('../utils/mongoose')

 const User = mongoose.model('users')

 const getUser = (id) =>{
     return User
     .find({_id:id})
     .then((results) =>{
         return results[0]
     })
     .catch(() =>{
         return false
     })

 }

 module.exports ={
     getUser
 }