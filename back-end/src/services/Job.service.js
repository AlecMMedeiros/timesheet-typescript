const { Job, sequelize } = require("../models");
const { jobError } = require("../utils/errorMap.utils");

const createJob = async (payload) => {
  const { title, description } = payload;
  const transaction = await sequelize.transaction();

  try {
    const newJob = await Job.create({ title, description, status: 'Aguardando inicio' })
    const getchNewJob = await Job.findByPk(newJob.null);
    const showNewJob = getchNewJob.dataValues;

    await transaction.commit();

    return { code: 201, object:showNewJob }

  } catch (error) {
    await transaction.rollback();

    throw jobError.type04;
  }
}

const fetchJobs = async () => {
  const transaction = await sequelize.transaction();
  try {
    const fetch = await Job.findAll();
    await transaction.commit();

    return { code: 200, object: fetch };
  } catch (error) { 
    transaction.rollback();

    throw jobError.type04;
  }
};


module.exports = {
  createJob,
  fetchJobs,
}

