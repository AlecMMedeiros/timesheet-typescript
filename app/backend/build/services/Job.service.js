"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JobModel_1 = __importDefault(require("../models/JobModel"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
const UserJobModel_1 = __importDefault(require("../models/UserJobModel"));
const models_1 = __importDefault(require("../models"));
const errorMap_utils_1 = __importDefault(require("../utils/errorMap.utils"));
class JobServices {
    _job = JobModel_1.default;
    _userjob = UserJobModel_1.default;
    _ErrorMap = new errorMap_utils_1.default();
    async fetchJobById(id) {
        try {
            const result = await this._job.findOne({
                where: { id },
                include: [
                    {
                        model: UserModel_1.default,
                        as: 'users',
                        attributes: { exclude: ['password', 'id'] },
                        through: { attributes: [] },
                    },
                ],
            });
            return { code: 200, object: result };
        }
        catch (error) {
            return { code: 400, message: error };
        }
    }
    async createJob(payload) {
        const { title, description, os, estimatedHours, userIds } = payload;
        const transaction = await models_1.default.transaction();
        try {
            const newJob = await this._job.create({
                title,
                description,
                os,
                estimatedHours,
                status: 'Aguardando inicio',
            });
            const getchNewJob = await this._job.findByPk(newJob.null);
            const getJobId = getchNewJob.dataValues.id;
            await Promise.all(userIds.map(async (userId) => this._userjob.create({ user_id: userId, job_id: getJobId })));
            await transaction.commit();
            return { code: 201, object: getchNewJob };
        }
        catch (error) {
            await transaction.rollback();
            throw this._ErrorMap.jobError.type04;
        }
    }
    async updateJob(payload) {
        const { title, description, os, estimatedHours, status, userIds, id } = payload;
        const transaction = await models_1.default.transaction();
        console.log();
        try {
            const newJob = await this._job.update({
                title: title,
                description: description,
                os: os,
                estimatedHours: estimatedHours,
                status: status,
            }, { where: { id: id } });
            const updatedJob = await this._job.findByPk(id);
            await this._userjob.destroy({ where: { job_id: id } });
            await Promise.all(userIds.map(async (userId) => this._userjob.create({ user_id: userId, job_id: id })));
            await transaction.commit();
            return { code: 201, object: updatedJob };
        }
        catch (error) {
            await transaction.rollback();
            throw this._ErrorMap.jobError.type04;
        }
    }
    async fetchJobs() {
        const transaction = await models_1.default.transaction();
        try {
            const fetch = await this._job.findAll({
                include: [
                    {
                        model: UserModel_1.default,
                        as: 'users',
                        attributes: { exclude: ['password', 'id'] },
                        through: { attributes: [] },
                    },
                ],
            });
            await transaction.commit();
            return { code: 200, object: fetch };
        }
        catch (error) {
            transaction.rollback();
            throw this._ErrorMap.jobError.type04;
        }
    }
}
exports.default = JobServices;
//# sourceMappingURL=Job.service.js.map