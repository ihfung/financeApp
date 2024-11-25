import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import AccountListItem from "../components/AccountListItem";
import database, {accountsCollection} from '../db'
import AccountsList from "../components/AccountsList";
import Feather from '@expo/vector-icons/Feather';
import {useState} from 'react';



export default function AccountsScreen() {

  console.log("AccountsScreen component loaded");
  const [name, setName] = useState(''); //useState is a hook that allows you to have state variables in functional components so name is the state variable and setName is the function that will be called when the state variable changes for example user changes text but the initial state is an empty string which is useState('')
  const [cap, setCap] = useState('');
  const [tap, setTap] = useState('');

  const createAccount = async() => {
    // console.warn('create account' , name); //a pop up message that appears in the console
    await database.write(async () => { //database.write is a transaction that allows you to read and write data from the database
      //create a new account in the database with the name, cap and tap that the user has entered to the account table in the database
      await accountsCollection.create(account => {
        account.name = name;
        account.cap = Number.parseFloat(cap);
        account.tap = Number.parseFloat(tap);
      });
    });
    //clear the input fields after the account has been created
    setName('');
    setCap('');
    setTap('');
  };

  return (
    <View style={{gap: 5, padding: 6}}>
      <View style={styles.header}> 
        <Text>Name</Text>
        <Text>Cap</Text>
        <Text>Tap</Text>
      </View>
    <AccountsList />

    <View style={styles.inputRow}>
      {/* //value is the value of the input where it will be stored and onChangeText is the function that will be called when the text changes by the user*/}
      <TextInput value={name} onChangeText={setName} placeholder="Name" style={styles.input}/> 
      <TextInput value={cap} onChangeText={setCap} placeholder="CAP %" style={styles.input}/>
      <TextInput value={tap} onChangeText={setTap} placeholder="TAP %"style={styles.input}/>
      {/* <Feather name="check" size={20} color="blue" /> */}

    </View>
    {/* //when the button is pressed the createAccount function is called */}
    <Button title='Add account' onPress={createAccount}/> 

    </View>
  )
};


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  inputRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },
  input:{
    flex: 1, //all share the exact amount of space

  }

});

