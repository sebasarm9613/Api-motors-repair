export class CreateRepairDTO{
  constructor(public date: Date, public userId: string){}

  static create(object : {[key: string]: any}) : [string?, CreateRepairDTO?]{
    const {date, userId} = object;

    if (!date) return ["Date is required"];
    if (!userId) return ["userId is required"];

    return[undefined, new CreateRepairDTO(date, userId)];
  }
}