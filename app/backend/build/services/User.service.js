"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JobModel_1 = __importDefault(require("../models/JobModel"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
const models_1 = __importDefault(require("../models"));
const { userError } = require("../utils/errorMap.utils");
const jwt = require('../utils/jwt.util');
class UserService {
    _job = JobModel_1.default;
    _user = UserModel_1.default;
    async createUser(payload) {
        const { displayName, email, password } = payload;
        const { password: _, ...userWithoutPassword } = payload;
        const transaction = await models_1.default.transaction();
        try {
            const token = jwt.createToken(userWithoutPassword);
            await this._user.create({ displayName, email, password });
            await transaction.commit();
            return { code: 201, object: { token } };
        }
        catch (error) {
            transaction.rollback();
            throw userError.type04;
        }
    }
    ;
    async fetchUsers() {
        const transaction = await models_1.default.transaction();
        try {
            const fetch = await this._user.findAll({
                attributes: { exclude: ['password'] },
                include: [{
                        model: JobModel_1.default,
                        as: 'jobs',
                        through: { attributes: [] }
                    }]
            });
            console.log(fetch);
            await transaction.commit();
            return { code: 200, object: fetch };
        }
        catch (error) {
            await transaction.commit();
            throw userError.type04;
        }
    }
    ;
    async fetchUsersById(id) {
        try {
            const fetch = await this._user.findOne({
                where: { id },
                attributes: { exclude: ['password', 'id'] },
                include: [{ model: JobModel_1.default, as: 'jobs', through: { attributes: [] } }],
            });
            return { code: 200, object: fetch };
        }
        catch (error) {
            throw userError.type04;
        }
    }
    ;
}
exports.default = UserService;
//# sourceMappingURL=User.service.js.map