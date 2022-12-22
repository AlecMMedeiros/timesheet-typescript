"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorMap_utils_1 = __importDefault(require("../utils/errorMap.utils"));
const validations_util_1 = __importDefault(require("../utils/validations.util"));
class AuthMiddleware {
    _validationUseful = new validations_util_1.default();
    _ErrorMap = new errorMap_utils_1.default();
    async validateAccess(req, res, next) {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(this._ErrorMap.loginError.type02.code).json({ message: this._ErrorMap.loginError.type02.message });
        }
        const user = await this._validationUseful.validateToken(authorization);
        if (user.code)
            return res.status(user.code).json({ message: user.message });
        next();
    }
    ;
}
exports.default = AuthMiddleware;
;
//# sourceMappingURL=auth.middleware.js.map