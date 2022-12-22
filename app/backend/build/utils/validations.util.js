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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken = __importStar(require("jsonwebtoken"));
require("dotenv/config");
const bcrypt_1 = __importDefault(require("bcrypt"));
const SECRET = process.env.JWT_SECRET;
class validationUseful {
    _jwt = jsonwebtoken;
    createToken(data) {
        const token = this._jwt.sign({ data }, SECRET, {
            expiresIn: '1d',
            algorithm: 'HS256',
        });
        return token;
    }
    async validateToken(token) {
        try {
            const { data } = this._jwt.verify(token, process.env.JWT_SECRET);
            return data;
        }
        catch (error) {
            return {
                code: 401,
                message: 'Expired or invalid token',
            };
        }
    }
    async decoded(token) {
        const data = this._jwt.verify(token, process.env.JWT_SECRET);
        return data;
    }
    async generateHash(password) {
        return bcrypt_1.default.hash(password, bcrypt_1.default.genSaltSync(8));
    }
    async validHashedPassword(password, userPassword) {
        return bcrypt_1.default.compare(password, userPassword);
    }
}
exports.default = validationUseful;
//# sourceMappingURL=validations.util.js.map