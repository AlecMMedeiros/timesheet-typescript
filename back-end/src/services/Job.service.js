const { Job, User, UserJob , sequelize } = require("../models");
const { jobError } = require("../utils/errorMap.utils");

const fetchJobById = async (id) => {
  try {
    const result = await Job.findOne({
      where: { id: id },
      include: [{ model: User, as: 'users', through: { attributes: [] } }],
    });
    
    return { code: 200, object: result };

  } catch (error) {
    return { code: 400, message: 'Error' };
  }
};

const createJob = async (payload) => {
  const { title, description, estimatedHours, userIds } = payload;
  const transaction = await sequelize.transaction();

  try {
    const newJob = await Job.create({ title, description, estimatedHours, status: 'Aguardando inicio' })
    const getchNewJob = await Job.findByPk(newJob.null);
    const getJobId = getchNewJob.dataValues.id;
    
    await Promise.all(userIds.map(
      async (userId) => UserJob.create({ userId , jobId: getJobId }),
    ));  

    await transaction.commit();

    return { code: 201, object: getchNewJob}

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
  fetchJobById,
}

