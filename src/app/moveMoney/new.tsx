import { View, Text } from "react-native";
import {Stack} from 'expo-router';


export default function newMoveMoneyScreen() {
  return (
    <View>
      {/* //creates a header at the top of the screen */}
       <Stack.Screen options={{title: 'Transfer Money'}} /> 
      <Text>transfer to which account</Text>
    </View>
  )
}