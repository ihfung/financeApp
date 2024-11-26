import {View, Text, StyleSheet} from 'react-native';  
import Account from '../model/Account';
import { withObservables } from '@nozbe/watermelondb/react';
import { accountsCollection } from '../db';

// we are going to create a new type called AccountListItem which is going to have an account of type Account
type AccountListItem = {
  account: Account;
}

// we are going to create a new function called AccountListItem which is going to take an account of type AccountListItem and return a JSX.Element(React component)
function AccountListItem({account}: AccountListItem){
  return (
    // so here we are going to display the account name, cap and tap because AccountListItem is linked to Account model 
    <View style={styles.container}>
      <Text style={styles.name}>{account.name}</Text>
      <Text style={styles.percentage}>{account.cap} </Text>
      <Text style={styles.percentage}>{account.tap} </Text>
    </View>
  )
}

// we are going to use the withObservables function to get the account from the database
// we are going to pass the account to the AccountListItem function
const enhanced = withObservables(['account'], ({account}: AccountListItem) => ({
    //accounts:  account.observe(), //this can be shorted like this
    account,

}));

export default enhanced(AccountListItem);

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5
  },
  name:{
    fontWeight: 'bold',
    fontSize: 16
  },
  percentage: {
    
  }

});


// tap is target allocation percentage 
// cap is current allocation percentage