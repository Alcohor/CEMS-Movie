
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
const addMovieInfo=()=>{
    return new Promise((resolve)=>{
        $.ajax({
            url: '/api/movies/save',
            type:'post',
            success: function (results) {
                resolve(results)
            }
        });
    })
}

export default  {
    getAllMoviesInfo,

}