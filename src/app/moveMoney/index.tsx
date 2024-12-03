import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';
import MoneyList from '../../components/moneyList';


export default function moveMoneyHomeScreen() {

  


  return (
    <View style={styles.container}>
      {/* //creates a header at the top of the screen */}
      <Stack.Screen options={{title: 'Move Money'}} /> 
     
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
