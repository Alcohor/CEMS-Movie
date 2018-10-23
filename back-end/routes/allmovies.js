const express = require("express");
const router = express.Router();
const allmovies = require('../controller/allmovies_controller')
//routes/allmovies/get
router.get('/get',allmovies.get)
router.post('/save',allmovies.save)

module.exports = router