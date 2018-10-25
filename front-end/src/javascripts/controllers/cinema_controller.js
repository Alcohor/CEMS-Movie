
const cinemaList_template = require('../view/cinemaList.html');


const cinema = (req,res,next) =>{
    res.render(cinemaList_template)
}

module.exports = {
    cinema
}