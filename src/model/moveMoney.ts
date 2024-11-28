import { Model } from '@nozbe/watermelondb'
import { field, readonly, date } from '@nozbe/watermelondb/decorators'

export default class Account extends Model {
  static table = 'moveMoneys';

  @field('money') money: number;
  @readonly @date('created_at') createdAt: Date;
 
}