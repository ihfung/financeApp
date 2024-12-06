import { Model } from '@nozbe/watermelondb'
import { field, text, readonly, date, immutableRelation, nochange } from '@nozbe/watermelondb/decorators'

export default class AccountMoveMoney extends Model {
  static table = 'accounts_moveMoneys';

  static associations = {
    moveMoneys: { type: 'belongs_to', foreignKey: 'moveMoney_id' },
    accounts: { type: 'belongs_to', foreignKey: 'account_id' },
  }


   @readonly @date('created_at') createdAt: Date;
   @field('cap') cap: number;
   @field('amount') amount: number;
   @nochange @field('user_id') userId: string;

   //this is linking the account and moveMoney tables to the accounts_moveMoneys table
   @immutableRelation('accounts', 'account_id') account;
   @immutableRelation('moveMoneys', 'moveMoney_id') moveMoney;

   
}