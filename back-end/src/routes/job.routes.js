const express = require('express');
const { jobController } = require("../controllers");
const { reqBodyMiddleware, jobMiddleware } = require('../middlewares');

const router = express.Router();

router.get('/',
jobController.listJobs);

router.post('/',
  reqBodyMiddleware.jobBody,
  jobMiddleware.validateNewJob,
  jobController.registerJob,
);

module.exports = router;