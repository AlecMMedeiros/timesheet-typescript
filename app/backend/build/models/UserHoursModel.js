"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class UserHoursModel extends sequelize_1.Model {
}
UserHoursModel.init({}, {
    sequelize: _1.default,
    tableName: 'users_hours',
    modelName: 'users_hours',
    timestamps: false
});
exports.default = UserHoursModel;
//# sourceMappingURL=UserHoursModel.js.map