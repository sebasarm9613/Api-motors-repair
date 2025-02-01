import jwt from 'jsonwebtoken';
import {envs} from './env';
import { string } from 'zod';


const JWT_SEED = envs.JWT_SECRET;

export class JwtAdapter {
  static async generateToken(payload: any, duration: string = "3h"){
    return new Promise((resolve) => {
      jwt.sign(payload, JWT_SEED, {expiresIn : duration}, (err, token) => { 
        if (err) return resolve(null);
        resolve(token);
      });
    });
  }

  static async verifyToken(token: string){
    return new Promise((resolve) => {
      jwt.verify(token, JWT_SEED, (err: any, decoded:any) => {
        if(err) return resolve(null);
        resolve(decoded);
      })
    })
  }
}
