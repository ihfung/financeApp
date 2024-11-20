import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function moveMoneyHomeScreen() {
  return (
    <View style={styles.container}>
      {/* //creates a header at the top of the screen */}
      <Stack.Screen options={{title: 'Move Money'}} /> 
      <Text>Move Money</Text>
       {/* //creates a link to the transfer money screen */}
      <Link href="/moveMoney/new">Transfer Between My Accounts</Link> 
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
