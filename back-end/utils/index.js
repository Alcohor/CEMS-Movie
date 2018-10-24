
const none = ()=>{}

const dataHandler = (data,res,template)=>{
    if(!data){
        res.render(template,{
            code:500,
            data:"发生了一个预期外的错误"
        })
        return false
    }
    return true
}

module.exports = {
    dataHandler
}