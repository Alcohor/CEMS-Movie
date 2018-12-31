// const mongoose = require('../utils/mongoose')

// const User = mongoose.model('users')

// const getUserInfoById = (id) =>{
//     return User
//     .findById(id)
//     .then(results =>{
//         return results
//     })
//     .catch(err => {
//         return false
//     })
// }
// // const listall=(query) => {
// //     let _query = query || {} ; ////查询的约定条件
// //     return User.find(_query)
// //       .sort({ createTime: -1 }) //按时间降序排列
// //       .then((results) => {
// //         return results
// //       })
// //       .catch((err) => {
// //         return false;
// //       });
// //   };
// // const list = async ({pageNo=1,pageSize=10}) =>{
// //     let _query = {};
// //     let _all_items = await listall(_query)
// //     return User.find(_query)
// //     .sort({createTime:-1})
// //     .skip((pageNo -1 )*pageSize)
// //     .limit(~~pageSize)
// //     .then((results) =>{
// //         return {
// //             items:results,
// //             pageInfo:{
// //                 pageNo,
// //                 pageSize,
// //                 total:_all_item.length,
// //                 totalPage:Math.ceil(_all_items.length/pageSize)
// //             }
// //         }
// //     })
// //     .catch((err) =>{
// //         return false
// //     })
   
// // }

// const auths =() =>{
//     return {
//         'map':6
      
//     }
// }

// module.exports = {
//     getUserInfoById,
//     auths
   
// }