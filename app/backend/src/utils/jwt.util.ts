import * as jsonwebtoken from 'jsonwebtoken';
import 'dotenv/config';
import ICreateUserToken from '../interfaces/ICreateUserToeken';

const SECRET = process.env.JWT_SECRET;

export default class jwtUtil {
  private _jwt = jsonwebtoken;  
  
  public createToken(data: ICreateUserToken) {
    const token = this._jwt.sign({ data }, SECRET as string , {
      expiresIn: '1d',
      algorithm: 'HS256',
    });

    return token;
  }

  public async validateToken(token: string) {
    try {
      const { data } = this._jwt.verify(token as string, process.env.JWT_SECRET as string) as jsonwebtoken.JwtPayload;
      return data;
    } catch (error) {
      return {
        code: 401,
        message: 'Expired or invalid token',
      };
    }
  }

  public async decoded(token: string) {
    const data = this._jwt.verify(token, process.env.JWT_SECRET as string);
    return data;
  }
}
