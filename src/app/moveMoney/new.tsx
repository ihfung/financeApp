
import { useState } from "react";
import {Stack} from 'expo-router';
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import database, {moveMoneyCollection} from '../../db';


export default function newMoveMoneyScreen() {

  const [money, setMoney] = useState('');

  const transfer = async () => {
    await database.write( async () => {
        moveMoneyCollection.create(newMoveMoney => {
          newMoveMoney.money = Number.parseFloat(money);
        })
    })
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
      <Button title="Transfer" onPress={transfer} />
    </View>
  )
}

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