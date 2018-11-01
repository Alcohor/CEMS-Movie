const mongoose = require('../utils/mongoose')

const User = mongoose.model('users')

const getUserInfoById = (id) =>{
    return User
    .findById(id)
    .then(results =>{
        return results
    })
    .catch(err => {
        return false
    })
}

const auths =() =>{
    return {
        'map':6
      
    }
}

module.exports = {
    getUserInfoById,
    auths
}