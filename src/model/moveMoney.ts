import { Model } from '@nozbe/watermelondb';
import { field, readonly, date, writer } from '@nozbe/watermelondb/decorators';
import moveMoneyCollection from '../db';

export default class Account extends Model {
  static table = 'moveMoneys';

  @field('money') money: number;
  @readonly @date('created_at') createdAt: Date;
 
  // @writer static async create(money: number) {
  //     return await moveMoneyCollection.create((newMoveMoney) => {
  //     newMoveMoney.money = money;
  //   });
  // }
}