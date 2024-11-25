import { FlatList, } from "react-native";
import AccountListItem from "./AccountListItem";
import {accountsCollection} from '../db'
import {useEffect, useState} from 'react';
import Account from "../model/Account";
import {withObservables} from '@nozbe/watermelondb/react';


//it will take the array of account from the database and render the AccountListItem component for each account in the array
//{accounts}: {accounts: Account[]} is a destructuring syntax that is going to take the accounts from the props and store it in the accounts variable
function AccountsList({accounts}: {accounts: Account[]}){
  return (
      // FlatList is a component that renders a list of items and in this case we are rendering AccountListItem
      <FlatList 
        data={accounts}
        contentContainerStyle={{gap: 5}} // gap is the space between each item in the list so we can scroll through the list
        // renderItem is a function that is going to be called for each item in the list and we are going to pass the account to the AccountListItem component
        renderItem={({item}) => <AccountListItem account={item}/>}
      />
    
  )
}

//function looks like this () => {} and it is a function that is going to be called when the component is created

//withObservables is a function that is going to take an array of dependencies in this case is the empty array and a function that is going to return an object that is going to be the props of the component and the object is going to be the accounts that is going to be passed to the AccountsList component
const enhance = withObservables([], () => ({
  //accounts is going to be an observable that is going to be updated whenever the accounts in the database change and query is going to fetch the accounts from the database which is from the import accountsCollection
  accounts: accountsCollection.query(), //we dont use fetch here because we want to get the observable that is going to be updated whenever the accounts in the database change 
  //withObservables is .observe() in watermelondb
}));

//EnhancedAccountsList is going to be the component that is going to be exported and it is going to be the AccountsList component that is enhanced with the withObservables function
//const EnhancedAccountsList = enhance(AccountsList);
//export default EnhancedAccountsList;

//exporting the AccountsList component that is enhanced with the withObservables function
export default enhance(AccountsList);



//Other method of doing the same thing 
  // //this useState is going to store the accounts in the database and setAccounts is going to be the function that is going to be called when the accounts change
  // const [accounts, setAccounts] = useState<Account[]>([]);
  // //useEffect is a hook that allows you to perform side effects in functional
  // useEffect(() => {
  //     //fetchAccounts is an async function that is going to fetch the accounts from the database
  //     const fetchAccounts = async () => {
  //      
  //        const accounts = await accountsCollection.query().fetch(); //fetch the data from the database from the accounts table and store it in the accounts variable
  //        setAccounts(accounts);
  //     }
  //     //call the fetchAccounts function to get the accounts from the database
  //     fetchAccounts();

  // }, []);

 //However this is not going to refresh the data immediately and displayed instantly on the app in ios simulator 