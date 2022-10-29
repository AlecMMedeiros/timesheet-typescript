const express = require('express');
const {  userRoute, jobRoute } = require('./index.routes');

const routers = express.Router();


routers.use('/user', userRoute);
routers.use('/job', jobRoute);


module.exports = routers;