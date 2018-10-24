const express = require("express");
const router = express.Router();
const movies = require('../controller/movies_controller')
//routes/movies/get
router.get('/get',movies.get)
router.post('/save',movies.save)
router.get('/getbyid',movies.getById)
router.get('/deletebyid',movies.delById)


module.exports = router