import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function moveMoneyHomeScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: 'Move Money'}} /> //creates a header at the top of the screen
      <Text>Move Money</Text>
      <Link href="/moveMoney/new">Transfer Between My Accounts</Link> //creates a link to the transfer money screen
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
