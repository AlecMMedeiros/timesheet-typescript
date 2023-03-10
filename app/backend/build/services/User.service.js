"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JobModel_1 = __importDefault(require("../models/JobModel"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
const models_1 = __importDefault(require("../models"));
const validations_util_1 = __importDefault(require("../utils/validations.util"));
const errorMap_utils_1 = __importDefault(require("../utils/errorMap.utils"));
const ActivityModel_1 = __importDefault(require("../models/ActivityModel"));
class UserService {
    _user = UserModel_1.default;
    _validationUseful;
    _ErrorMap;
    constructor() {
        this._ErrorMap = new errorMap_utils_1.default();
        this._validationUseful = new validations_util_1.default();
    }
    async createUser(payload) {
        const { displayName, email, password } = payload;
        const { password: _, ...userWithoutPassword } = payload;
        const transaction = await models_1.default.transaction();
        try {
            const token = this._validationUseful.createToken(userWithoutPassword);
            await this._user.create({ displayName, email, password });
            await transaction.commit();
            return { code: 201, object: { token } };
        }
        catch (error) {
            transaction.rollback();
            throw this._ErrorMap.userError.type04;
        }
    }
    async updateUser(payload) {
        const { displayName, email, id } = payload;
        const transaction = await models_1.default.transaction();
        try {
            await this._user.update({ displayName: displayName, email: email }, { where: { id: id } });
            await transaction.commit();
            const updatedUser = await this._user.findByPk(id, { attributes: { exclude: ['password'] } });
            return { code: 200, object: { updatedUser } };
        }
        catch (error) {
            transaction.rollback();
            throw this._ErrorMap.userError.type04;
        }
    }
    async fetchUsers() {
        const transaction = await models_1.default.transaction();
        try {
            const fetch = await this._user.findAll({
                attributes: { exclude: ['password'] },
                include: [
                    {
                        model: ActivityModel_1.default,
                        as: 'activities',
                        through: { attributes: [] },
                    },
                ],
            });
            await transaction.commit();
            return { code: 200, object: fetch };
        }
        catch (error) {
            await transaction.commit();
            console.log(error);
            throw this._ErrorMap.userError.type04;
        }
    }
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
            throw this._ErrorMap.userError.type04;
        }
    }
}
exports.default = UserService;
//# sourceMappingURL=User.service.js.map