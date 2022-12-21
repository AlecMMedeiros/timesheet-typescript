"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joiSchema = require('../utils/joiSchemas.util');
class BodyValidation {
    async loginBody(req, res, next) {
        const { error } = joiSchema.loginSchema.validate(req.body);
        if (error)
            return res.status(400).json({ message: error.details[0].message });
        next();
    }
    ;
    async userBody(req, res, next) {
        const { error } = joiSchema.userSchema.validate(req.body);
        if (error)
            return res.status(400).json({ message: error.details[0].message });
        next();
    }
    ;
    async jobBody(req, res, next) {
        const { error } = joiSchema.jobSchema.validate(req.body);
        if (error)
            return res.status(400).json({ message: error.details[0].message });
        next();
    }
    ;
}
exports.default = BodyValidation;
//# sourceMappingURL=reqBodyValidate.middleware.js.map