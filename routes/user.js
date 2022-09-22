//Requires

const {Router} = require('express');
const express = require('express');

//Controllers
const {
    getSpecificCustomer,
} = require('../controllers/user');

//Initializing
const router = express.Router();

//Routes
//GET
router.get('/user', getSpecificUser);

module.exports = router;