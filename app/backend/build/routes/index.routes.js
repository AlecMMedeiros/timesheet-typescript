"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./user.routes"));
const job_routes_1 = __importDefault(require("./job.routes"));
const router = (0, express_1.Router)();
router.use('/user', user_routes_1.default);
router.use('/job', job_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.routes.js.map