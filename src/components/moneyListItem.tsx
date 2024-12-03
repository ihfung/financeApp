import { View, Text, StyleSheet } from "react-native";
import moveMoney from "../model/moveMoney";
import { withObservables } from "@nozbe/watermelondb/react";
import AccountMoveMoney from "../model/AccountMoveMoney";
import AccountMoveMoneyListItem from "./AccountMoveMoneyListItem";


type MoneyListItem = {
  moveMoney: moveMoney; 
  accountMoveMoneys: AccountMoveMoney[]
}

const MoneyListItem = ({moveMoney, accountMoveMoneys }: MoneyListItem) => {
 
  //displays the date and money amount of a moveMoney record from the moveMoneys table
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>{moveMoney.createdAt.toLocaleDateString()}</Text>
        <Text style={styles.money}> ${moveMoney.money}</Text>
        <Text>{accountMoveMoneys.length}</Text>
      </View>
     <View style={{gap: 5, paddingVertical: 5}}>
      {
        accountMoveMoneys.map(item => (
         <AccountMoveMoneyListItem accountMoveMoney={item}/>
        ))
      }
     </View>
    </View>
  )
};


const enchance = withObservables(['moveMoney'], ({moveMoney: moveMoney}) => ({
  moveMoney,
  accountMoveMoneys: moveMoney.accountMoveMoneys,
  
}));

export default enchance(MoneyListItem);

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

