"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_service_1 = __importDefault(require("../services/User.service"));
class UserController {
    _userservice = new User_service_1.default();
    async registerUser(req, res) {
        const newUser = await this._userservice.createUser(req.body);
        return res.status(newUser.code).json(newUser.object);
    }
    ;
    async listUsers(req, res) {
        const fetch = await this._userservice.fetchUsers();
        return res.status(fetch.code).json(fetch.object);
    }
    async listUsersById(req, res) {
        const { id } = req.params;
        const fetch = await this._userservice.fetchUsersById(id);
        return res.status(fetch.code).json(fetch.object);
    }
}
exports.default = UserController;
//# sourceMappingURL=User.controller.js.map