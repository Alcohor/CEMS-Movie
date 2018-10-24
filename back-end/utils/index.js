
const none = ()=>{}

//数据处理
const dataHandler = (data,res,template,callbacks = {})=>{
    
    let{success,fail} = {
        success:callbacks.success||none,
        fail:callbacks.fail||none,
    }
    if(!data){//失败
        fail();
        response.call(res,{template,status:"500",data:"发生了一个预期之外的错误的错误"})
    }else{
        success();
        response.call(res,{template,status:'200',data:JSON.stringify(data)})
    }
}

const response = function({template,status,data}){
    this.render(template,{
        status:status,
        data:data
    })
} 


module.exports = {
    dataHandler
}