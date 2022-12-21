"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const job_middleware_1 = __importDefault(require("../middlewares/job.middleware"));
const Job_controller_1 = __importDefault(require("../controllers/Job.controller"));
const reqBodyValidate_middleware_1 = __importDefault(require("../middlewares/reqBodyValidate.middleware"));
const router = express_1.default.Router();
const jobController = new Job_controller_1.default();
const jobMiddleware = new job_middleware_1.default();
const reqBodyMiddleware = new reqBodyValidate_middleware_1.default();
router.get('/', jobController.listJobs.bind(jobController));
router.get('/:id', jobController.listJobsById.bind(jobController));
router.post('/', reqBodyMiddleware.jobBody.bind(reqBodyMiddleware), jobMiddleware.validateNewJob.bind(jobMiddleware), jobController.registerJob.bind(jobController));
router.patch('/:id', reqBodyMiddleware.jobUpdateBody.bind(reqBodyMiddleware), jobController.updateJob.bind(jobController));
exports.default = router;
//# sourceMappingURL=job.routes.js.map