"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Job_service_1 = __importDefault(require("../services/Job.service"));
class JobController {
    _jobservice = new Job_service_1.default();
    async registerJob(req, res) {
        const newJob = await this._jobservice.createJob(req.body);
        return res.status(newJob.code).json(newJob.object);
    }
    ;
    async updateJob(req, res) {
        const { id } = req.params;
        const payload = { ...req.body, id };
        const updatedJob = await this._jobservice.updateJob(payload);
        return res.status(updatedJob.code).json(updatedJob.object);
    }
    async listJobs(req, res) {
        const fetch = await this._jobservice.fetchJobs();
        return res.status(fetch.code).json(fetch.object);
    }
    ;
    async listJobsById(req, res) {
        const { id } = req.params;
        const fetch = await this._jobservice.fetchJobById(Number(id));
        return res.status(fetch.code).json(fetch.object || { message: fetch.message });
    }
    ;
}
exports.default = JobController;
//# sourceMappingURL=Job.controller.js.map