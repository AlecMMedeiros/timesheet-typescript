"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const UserHoursModel_1 = __importDefault(require("./UserHoursModel"));
const UserModel_1 = __importDefault(require("./UserModel"));
class HourModel extends sequelize_1.Model {
}
HourModel.init({
    id: {
        type: sequelize_1.INTEGER,
        primaryKey: true
    },
    activity: {
        type: sequelize_1.STRING,
        allowNull: false
    },
    hours: {
        type: sequelize_1.DATE,
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
    tableName: 'hours',
    modelName: 'hours',
    sequelize: _1.default,
    underscored: true,
    timestamps: false,
});
UserModel_1.default.belongsToMany(HourModel, {
    as: 'hours',
    through: UserHoursModel_1.default,
    foreignKey: 'user_id',
    otherKey: 'hour_id',
});
HourModel.belongsToMany(UserModel_1.default, {
    as: 'users',
    through: UserHoursModel_1.default,
    foreignKey: 'hour_id',
    otherKey: 'user_id',
});
exports.default = HourModel;
//# sourceMappingURL=HourModel.js.map