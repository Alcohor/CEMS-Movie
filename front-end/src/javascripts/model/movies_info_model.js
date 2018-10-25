
const getAllMoviesInfo=()=>{
    return new Promise((resolve)=>{
        $.ajax({
            url: '/api/movies/get',
            success: function (results) {
                resolve(results)
            }
        });
    })
}
const addMovieInfo=(data)=>{
    return new Promise((resolve)=>{
        $('#save-form').ajaxSubmit({
            url: '/api/movies/save',
            type: 'POST',
            success: (results) => {
                resolve(results)
            }
        })
    })
}

export default  {
    getAllMoviesInfo,
    addMovieInfo

}