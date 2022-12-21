"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = __importStar(require("joi"));
class JoiSchemas {
    _errorMessage = 'Some required fields are missing';
    loginSchema = Joi.object({
        email: Joi.string().email().required().messages({
            'any.required': this._errorMessage,
            'string.empty': this._errorMessage,
        }),
        password: Joi.string().required().messages({
            'any.required': this._errorMessage,
            'string.empty': this._errorMessage,
        }),
    });
    userSchema = Joi.object({
        displayName: Joi.string().min(8).required().messages({
            'string.min': '"displayName" length must be at least 8 characters long',
        }),
        email: Joi.string().email().required().messages({
            'string.min': '"email" must be a valid email',
        }),
        password: Joi.string().min(6).required().messages({
            'string.min': '"password" length must be at least 6 characters long',
        }),
    });
    userUpdateSchema = Joi.object({
        displayName: Joi.string().min(8).required().messages({
            'string.min': '"displayName" length must be at least 8 characters long',
        }),
        email: Joi.string().email().required().messages({
            'string.min': '"email" must be a valid email',
        }),
    });
    jobSchema = Joi.object({
        title: Joi.string().min(8).required().messages({
            'any.required': this._errorMessage,
            'string.min': '"title" length must be at least 8 characters long',
        }),
        description: Joi.string().min(40).required().messages({
            'any.required': this._errorMessage,
            'string.min': '"description" length must be at least 40 characters long',
        }),
        os: Joi.number().min(1).required().messages({
            'any.required': this._errorMessage,
            'number.min': '"os" length must be at least 1 characters long',
        }),
        estimatedHours: Joi.string().required().messages({
            'any.required': this._errorMessage,
            'string.min': '"description" length must be at least 40 characters long',
        }),
        userIds: Joi.array().items(Joi.number().required().messages({
            'any.required': '"userIds" at least one userId',
        }))
    });
    jobUpdateSchema = Joi.object({
        title: Joi.string().min(8).required().messages({
            'any.required': this._errorMessage,
            'string.min': '"title" length must be at least 8 characters long',
        }),
        description: Joi.string().min(40).required().messages({
            'any.required': this._errorMessage,
            'string.min': '"description" length must be at least 40 characters long',
        }),
        os: Joi.number().min(1).required().messages({
            'any.required': this._errorMessage,
            'number.min': '"os" length must be at least 1 characters long',
        }),
        estimatedHours: Joi.string().required().messages({
            'any.required': this._errorMessage,
            'string.min': '"description" length must be at least 40 characters long',
        }),
        status: Joi.string().required().messages({
            'any.required': this._errorMessage,
        }),
        userIds: Joi.array().items(Joi.number().required().messages({
            'any.required': '"userIds" at least one userId',
        })),
    });
}
exports.default = JoiSchemas;
//# sourceMappingURL=joiSchemas.util.js.map