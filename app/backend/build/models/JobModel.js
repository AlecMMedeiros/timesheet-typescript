"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const UserJobModel_1 = __importDefault(require("./UserJobModel"));
const UserModel_1 = __importDefault(require("./UserModel"));
class JobModel extends sequelize_1.Model {
}
JobModel.init({
    id: {
        type: sequelize_1.INTEGER,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    os: {
        type: sequelize_1.INTEGER,
        allowNull: true,
    },
    estimatedHours: {
        type: sequelize_1.TIME,
    },
    status: {
        type: sequelize_1.STRING,
    },
}, {
    tableName: 'jobs',
    modelName: 'jobs',
    sequelize: _1.default,
    timestamps: true,
    underscored: true,
});
UserModel_1.default.belongsToMany(JobModel, {
    as: 'jobs',
    through: UserJobModel_1.default,
    foreignKey: 'user_id',
    otherKey: 'job_id',
});
JobModel.belongsToMany(UserModel_1.default, {
    as: 'users',
    through: UserJobModel_1.default,
    foreignKey: 'job_id',
    otherKey: 'user_id',
});
exports.default = JobModel;
//# sourceMappingURL=JobModel.js.map