import UserService from "../services/User.service";
import { Response, Request } from "express";

export default class UserController {
  private _userservice = new UserService();

  public async registerUser (req: Request, res: Response) {
    const newUser = await this._userservice.createUser(req.body);
  
    return res.status(newUser.code).json(newUser.object);
  };
  
  public async listUsers (req: Request, res: Response) {
    const fetch = await this._userservice.fetchUsers();
  
    return res.status(fetch.code).json(fetch.object);
  }
  
  public async listUsersById (req: Request, res: Response) {
    const { id } = req.params;   
    const fetch = await this._userservice.fetchUsersById(id);  
  
    return res.status(fetch.code).json(fetch.object);
  }
} 
