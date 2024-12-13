import { Platform } from 'react-native';
import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { setGenerator } from '@nozbe/watermelondb/utils/common/randomId'; 
import * as Crypto from 'expo-crypto';
 

import schema from './schema';
import migrations from './migrations';

// import Post from './model/Post' // ⬅️ You'll import your Models here
import Account from '../model/Account';
import MoveMoney from '../model/moveMoney';
import AccountMoveMoney from '../model/AccountMoveMoney';

setGenerator(() => Crypto.randomUUID());

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  schema,
  // (You might want to comment it out for development purposes -- see Migrations documentation)
  //migrations,
  // (optional database name or file system path)
  // dbName: 'myapp',
  // (recommended option, should work flawlessly out of the box on iOS. On Android,
  // additional installation steps have to be taken - disable if you run into issues...)
  jsi: true, /* Platform.OS === 'ios' */
  // (optional, but you should implement this method)
  onSetUpError: error => {
    // Database failed to load -- offer the user to reload the app or log out
  }
});

// Then, make a Watermelon database from it!
const database = new Database({
  adapter,
  modelClasses: [
    // Post, // ⬅️ You'll add Models to Watermelon here
    Account,
    MoveMoney,
    AccountMoveMoney,

  ],
});

export default database;

export const accountsCollection = database.get<Account>('accounts'); //this is the accounts table in the database and <Account> is the type of data that is being fetched from the database account table

export const moveMoneyCollection = database.get<MoveMoney>('moveMoneys');

export const accountMoveMoneyCollection = database.get<AccountMoveMoney>('accounts_moveMoneys');
