const express = require("express");
const router = express.Router();
const movies = require('../controller/movies_controller')
const fieupload = require('../middleware/moviesPicUpload')
//routes/movies/get
router.get('/get',movies.get)
router.post('/save',fieupload,movies.save)
router.get('/getbyid',movies.getById)
router.get('/deletebyid',movies.delById)
router.get('/getbyname',movies.getByName)


module.exports = router