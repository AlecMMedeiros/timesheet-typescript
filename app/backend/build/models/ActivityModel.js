"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const UserActivityModel_1 = __importDefault(require("./UserActivityModel"));
const UserModel_1 = __importDefault(require("./UserModel"));
class ActivityModel extends sequelize_1.Model {
}
ActivityModel.init({
    id: {
        type: sequelize_1.INTEGER,
        primaryKey: true
    },
    activity: {
        type: sequelize_1.STRING,
        allowNull: false
    },
    hours: {
        type: sequelize_1.TIME,
        allowNull: false
    },
    comment: {
        type: sequelize_1.STRING,
        allowNull: false
    },
    date: {
        type: sequelize_1.DATEONLY,
        allowNull: false
    },
}, {
    tableName: 'activities',
    modelName: 'activities',
    sequelize: _1.default,
    underscored: true,
    timestamps: false,
});
UserModel_1.default.belongsToMany(ActivityModel, {
    as: 'activities',
    through: UserActivityModel_1.default,
    foreignKey: 'user_id',
    otherKey: 'activity_id',
});
ActivityModel.belongsToMany(UserModel_1.default, {
    as: 'users',
    through: UserActivityModel_1.default,
    foreignKey: 'activity_id',
    otherKey: 'user_id',
});
exports.default = ActivityModel;
//# sourceMappingURL=ActivityModel.js.map