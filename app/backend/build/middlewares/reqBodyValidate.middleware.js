"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joiSchemas_util_1 = __importDefault(require("../utils/joiSchemas.util"));
class BodyValidation {
    _Joi = new joiSchemas_util_1.default();
    async loginBody(req, res, next) {
        const { error } = this._Joi.loginSchema.validate(req.body);
        if (error)
            return res.status(400).json({ message: error.details[0].message });
        next();
    }
    ;
    async userBody(req, res, next) {
        const { error } = this._Joi.userSchema.validate(req.body);
        if (error)
            return res.status(400).json({ message: error.details[0].message });
        next();
    }
    ;
    async jobBody(req, res, next) {
        const { error } = this._Joi.jobSchema.validate(req.body);
        if (error)
            return res.status(400).json({ message: error.details[0].message });
        next();
    }
    ;
}
exports.default = BodyValidation;
//# sourceMappingURL=reqBodyValidate.middleware.js.map