import user_info_model from '../model/user_info_model'

const renderUser= async() =>{
    
    let user_info = await user_info_model.getUserInfo()

    if(user_info.status ===200){
        $('.user-info .username').html(user_info.data.username)
    }

    $('.user-info .exit').click(async function(){
        let _result = await user_info_model.exit()
        console.log(_result)
        if(_result.status===200){
            window.location.href='/login.html'
        }
    })
}

export default {
    renderUser
}