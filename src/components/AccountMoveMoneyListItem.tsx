import {View, Text} from 'react-native';
import AccountMoveMoney from '../model/AccountMoveMoney';
import { withObservables } from '@nozbe/watermelondb/react';
import Account from '../model/Account';


type AccountMoveMoneyListItem = {
  accountMoveMoney: AccountMoveMoney; 
  account: Account;

}

const AccountMoveMoneyListItem = ({accountMoveMoney, account}: AccountMoveMoneyListItem) => {
  return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>{account.name}</Text>
        <Text>${accountMoveMoney.amount}</Text>
      </View>
  )
};

const enhance = withObservables(['accountMoveMoney'], ({accountMoveMoney}: 
  {accountMoveMoney: AccountMoveMoney}) => 
    ({accountMoveMoney, 
      account: accountMoveMoney.account
    })
); 


export default enhance(AccountMoveMoneyListItem);