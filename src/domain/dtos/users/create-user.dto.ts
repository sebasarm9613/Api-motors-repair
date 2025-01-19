import { regularExp } from "../../../config";
import { Role } from "../../../data/postgres/models/user.model";

export class CreateUserDTO{
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public role: Role 
  ){}

  static create(object: {[key:string]:any}):[string?, CreateUserDTO?]{
    const {name, email, password, role} = object;

    if (!name) return ["Name is required"];
    if (!email) return ["Email is required"];
    if (!regularExp.email.test(email)) return ["Invalid email"];
    if (!password) return ["Missing password"];
    if (!regularExp.password.test(password)) return ["The password must be at least 10 characters long and contain at least one uppercase letter, one lowercase letter, and one special character"];
    if (!role) return ["Missing role"];

    return [undefined, new CreateUserDTO(name, email, password, role)];
  }
}