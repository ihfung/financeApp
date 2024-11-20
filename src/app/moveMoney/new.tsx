import { View, Text } from "react-native";
import {Stack} from 'expo-router';


export default function newMoveMoneyScreen() {
  return (
    <View>
       <Stack.Screen options={{title: 'Transfer Money'}} /> //creates a header at the top of the screen
      <Text>transfer to which account</Text>
    </View>
  )
}