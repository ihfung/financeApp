import { View, Text, StyleSheet } from "react-native";
import AccountListItem from "../components/AccountListItem";
import AccountsList from "../components/AccountsList";



export default function AccountsScreen() {
  return (
    <View style={{gap: 5, padding: 6}}>
      <View style={styles.header}> 
        <Text>Name</Text>
        <Text>Cap</Text>
        <Text>Tap</Text>
      </View>
    <AccountsList />
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },

});