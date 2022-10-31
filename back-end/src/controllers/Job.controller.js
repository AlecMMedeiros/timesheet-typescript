const { jobService } = require("../services");

const registerJob = async (req, res) => {
  const newJob = await jobService.createJob(req.body);
  

  return res.status(newJob.code).json(newJob.object || { message: newJob.message });
}

const listJobs = async (req, res) => {
  const fetch = await jobService.fetchJobs();

  return res.status(fetch.code).json(fetch.object || { message: fetch.message });
}
module.exports = {
  registerJob,
  listJobs,
}