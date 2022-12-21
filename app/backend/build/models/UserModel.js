"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class UserModel extends sequelize_1.Model {
}
UserModel.init({
    id: {
        type: sequelize_1.INTEGER,
        primaryKey: true
    },
    displayName: {
        type: sequelize_1.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.STRING,
        allowNull: false
    },
}, {
    tableName: 'users',
    modelName: 'users',
    sequelize: _1.default,
    underscored: true,
    timestamps: false,
});
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map