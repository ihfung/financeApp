import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Link, Redirect, Stack } from 'expo-router';
import MoneyList from '../../../components/moneyList';
import Ionicons from '@expo/vector-icons/Ionicons';
import { mySync } from '../../../db/sync';
import { supabase } from '../../../lib/supabase';
import  * as Crypto from 'expo-crypto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function moveMoneyHomeScreen() {

  // const test = async () => {
  //   const result = await supabase.rpc('create_account', {
  //     _id: Crypto.randomUUID(),
  //     _user_id: Crypto.randomUUID(),
  //     _name: 'test',
  //     _cap: 100.0,
  //     _tap: 200.0,
  //     _created_at: new Date().toISOString(),
  //     _updated_at: new Date().toISOString()
  //   });
  //   console.log(result);  
  // }

  const logout = async () => {
      // console.warn('logout');
      const {error} = await supabase.auth.signOut();
      if (!error) {
        return <Redirect href={"/login"} />
      } else {
        console.error('Logout error', error.message);
      }
     
  };

  return (
    <View style={styles.container}>
      {/* //creates a header at the top of the screen */}
      <Stack.Screen options={{title: 'Move Money',
         headerRight: () => 
              (<MaterialIcons name="logout" size={20} color="black" onPress={logout} style={{marginRight: -5}}/>),
      }} /> 
      {/* <Button title="Test" onPress={test} /> */}
       {/* //creates a link to the transfer money screen */}
      <Link 
        href="/moveMoney/new" asChild>
          <Text style={styles.button}>Transfer Between My Accounts</Text>
      </Link> 

      <MoneyList />
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    margin: 10,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 5,
    overflow: 'hidden',
  }
});
