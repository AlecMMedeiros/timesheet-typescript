"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class UserActivityModel extends sequelize_1.Model {
}
UserActivityModel.init({}, {
    sequelize: _1.default,
    tableName: 'users_activities',
    modelName: 'users_activities',
    timestamps: false
});
exports.default = UserActivityModel;
//# sourceMappingURL=UserActivityModel.js.map