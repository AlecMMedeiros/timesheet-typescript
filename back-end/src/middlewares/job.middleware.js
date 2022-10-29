const { Job } = require('../models');
const { jobError } = require('../utils/errorMap.utils');

const validateNewJob = async (req, res, next) => {
  const { title } = req.body;
  const checkSameTitle = await Job.findOne({ where: { title } });

  if (checkSameTitle) {
    return res.status(jobError.type02.code).json({ message: jobError.type02.message });
  }

 next();
};

module.exports = {
    validateNewJob,
};