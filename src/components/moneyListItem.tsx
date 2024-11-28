import { View, Text, StyleSheet } from "react-native";
import moveMoney from "../model/moveMoney";



const MoneyListItem = ({moveMoney}: {moveMoney: moveMoney}) => {
  //displays the date and money amount of a moveMoney record from the moveMoneys table
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>{moveMoney.createdAt.toLocaleDateString()}</Text>
        <Text style={styles.money}> ${moveMoney.money}</Text>
      </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  money: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
  date: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'gainsboro',
    padding: 10,
  }
});

export default MoneyListItem;