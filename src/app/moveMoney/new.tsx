
import { useState } from "react";
import {Stack, router} from 'expo-router';
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import database, {accountsCollection, moveMoneyCollection} from '../../db';
import { withObservables } from "@nozbe/watermelondb/react";
import Account from "../../model/Account";

function newMoveMoneyScreen({accounts}: {accounts:Account[]}) {

  const [money, setMoney] = useState('0');
  //this function is called when the transfer button is clicked
  //and it creates a new moveMoney record in the database
  const transfer = async () => {
    await database.write( async () => {
        moveMoneyCollection.create(newMoveMoney => {
          newMoveMoney.money = Number.parseFloat(money);
        })
    })

    //clear the money input field
    setMoney('');

    //go back to the previous screen when the transfer button is clicked
    router.back();
  };

  return (
    <View style={styles.container}>
      {/* //creates a header at the top of the screen */}
       <Stack.Screen options={{title: 'Transfer Money'}} /> 
       <View style={styles.inputRow}>
            <Text style={styles.label}>Amount</Text>
            <TextInput 
                value={money} 
                onChangeText={setMoney} 
                placeholder='$123' 
                style={styles.input}
            />
       </View>
       {accounts.map((account) => (
          <View key={account.id} style={styles.inputRow}> 
            <Text style={{flex: 1}}>
              {account.name}: {account.cap}
            </Text>
            <Text>
              ${(Number.parseFloat(money) * account.cap) / 100}
            </Text>
          </View>
       ))}
      <Button title="Transfer" onPress={transfer} />
    </View>
  )
}


const enhance = withObservables([], () => ({
   accounts: accountsCollection.query(),
}));


export default enhance(newMoveMoneyScreen);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10
  },
  label:{
    fontWeight: 'bold',
    width: 100,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  inputRow:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  }
});