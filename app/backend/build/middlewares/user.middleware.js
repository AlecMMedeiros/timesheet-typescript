"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = __importDefault(require("../models/UserModel"));
const errorMap_utils_1 = __importDefault(require("../utils/errorMap.utils"));
class ValidateUsers {
    _user = UserModel_1.default;
    _ErrorMap = new errorMap_utils_1.default();
    async validateNewUSer(req, res, next) {
        const { email } = req.body;
        const user = await this._user.findOne({ where: { email } });
        if (user) {
            return res.status(this._ErrorMap.userError.type02.code).json({ message: this._ErrorMap.userError.type02.message });
        }
        next();
    }
    ;
}
exports.default = ValidateUsers;
//# sourceMappingURL=user.middleware.js.map