import { Model } from '@nozbe/watermelondb';
import { field, readonly, date, children } from '@nozbe/watermelondb/decorators';
import moveMoneyCollection from '../db';

export default class moveMoneys extends Model {
  static table = 'moveMoneys';

  static associations = {
    accounts_moveMoneys: { type: 'has_many', foreignKey: 'moveMoney_id' },
  }

  @field('money') money: number;
  @readonly @date('created_at') createdAt: Date;
  @children('accounts_moveMoneys') accountMoveMoneys;
 
  // @writer static async create(money: number) {
  //     return await moveMoneyCollection.create((newMoveMoney) => {
  //     newMoveMoney.money = money;
  //   });
  // }
}