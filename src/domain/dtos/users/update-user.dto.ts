import { regularExp } from "../../../config";

export class UpdateUserDTO{
  constructor(
    public name: string,
    public email: string,

  ){}

  static create(object: {[key:string]:any}):[string?, UpdateUserDTO?]{
    const {name, email} = object;

    if (!name) return ["Name is required"];
    if (!email) return ["Email is required"];
    if (!regularExp.email.test(email)) return ["Invalid email"];
  
    return [undefined, new UpdateUserDTO(name, email)];
  }
}