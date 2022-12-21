"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const UserModel_1 = __importDefault(require("../models/UserModel"));
const errorMap_utils_1 = __importDefault(require("../utils/errorMap.utils"));
class ValidateUsers {
    _user = UserModel_1.default;
    _ErrorMap = new errorMap_utils_1.default();
    async validateNewUSer(req, res, next) {
        const { displayName, email } = req.body;
        const user = await this._user.findOne({
            where: {
                [sequelize_1.Op.and]: [
                    { email: email },
                    { displayName: displayName }
                ]
            }
        });
        if (user) {
            return res.status(this._ErrorMap.userError.type02.code).json({ message: this._ErrorMap.userError.type02.message });
        }
        next();
    }
    ;
}
exports.default = ValidateUsers;
//# sourceMappingURL=user.middleware.js.map