import { Model } from '@nozbe/watermelondb';
import { field, readonly, date, children, nochange } from '@nozbe/watermelondb/decorators';
import moveMoneyCollection from '../db';

export default class moveMoneys extends Model {
  static table = 'moveMoneys';

  static associations = {
    accounts_moveMoneys: { type: 'has_many', foreignKey: 'moveMoney_id' },
  }

  @field('money') money: number;
  @readonly @date('created_at') createdAt: Date;
  @nochange @field('user_id') userId: string;


  @children('accounts_moveMoneys') accountMoveMoneys;
 
  
}