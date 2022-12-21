"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class UserJobsModel extends sequelize_1.Model {
}
UserJobsModel.init({}, {
    sequelize: _1.default,
    tableName: 'users_jobs',
    modelName: 'users_jobs',
    timestamps: false
});
exports.default = UserJobsModel;
//# sourceMappingURL=UserJobModel.js.map