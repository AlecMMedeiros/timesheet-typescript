const express = require('express');
const {  userRoute } = require('./index.routes');

const routers = express.Router();


routers.use('/user', userRoute);


module.exports = routers;