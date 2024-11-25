import { FlatList, } from "react-native";
import AccountListItem from "./AccountListItem";
import {accountsCollection} from '../db'
import {useEffect, useState} from 'react';
import Account from "../model/Account";

export default function AccountsList(){
  //this useState is going to store the accounts in the database and setAccounts is going to be the function that is going to be called when the accounts change
  const [accounts, setAccounts] = useState<Account[]>([]);
  //useEffect is a hook that allows you to perform side effects in functional
  useEffect(() => {
      //fetchAccounts is an async function that is going to fetch the accounts from the database
      const fetchAccounts = async () => {
         //however this is not going to refresh the data immediately and displayed instantly on the app in ios simulator
         const accounts = await accountsCollection.query().fetch(); //fetch the data from the database from the accounts table and store it in the accounts variable
         setAccounts(accounts);
      }
      //call the fetchAccounts function to get the accounts from the database
      fetchAccounts();

  }, []);

  

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