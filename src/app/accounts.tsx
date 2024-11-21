import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import AccountListItem from "../components/AccountListItem";
import AccountsList from "../components/AccountsList";
import Feather from '@expo/vector-icons/Feather';
import {useState} from 'react';

export default function AccountsScreen() {

  const [name, setName] = useState('');
  const [cap, setCap] = useState('');
  const [tap, setTap] = useState('');

  const createAccount = () => {
    console.warn('create account' , name); //a pop up message that appears in the console
  }

  return (
    <View style={{gap: 5, padding: 6}}>
      <View style={styles.header}> 
        <Text>Name</Text>
        <Text>Cap</Text>
        <Text>Tap</Text>
      </View>
    <AccountsList />

    <View style={styles.inputRow}>
      {/* //value is the value of the input where it will be stored and onChangeText is the function that will be called when the text changes */}
      <TextInput value={name} onChangeText={setName} placeholder="Name" style={styles.input}/> 
      <TextInput value={cap} onChangeText={setCap} placeholder="CAP %" style={styles.input}/>
      <TextInput value={tap} onChangeText={setTap} placeholder="TAP %"style={styles.input}/>
      {/* <Feather name="check" size={20} color="blue" /> */}

    </View>

    <Button title='Add account' onPress={createAccount}/>

    </View>
  )
}


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