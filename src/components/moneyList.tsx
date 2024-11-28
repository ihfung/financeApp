import { FlatList } from "react-native";
import MoneyListItem from "./moneyListItem";
import { withObservables } from "@nozbe/watermelondb/react";
import {moveMoneyCollection} from '../db';
import moveMoney from "../model/moveMoney";
import { Q } from '@nozbe/watermelondb';

//grab the moveMoneys array from the props and display it in a FlatList
function moneyList ({moveMoneys}: {moveMoneys: moveMoney[]}) {
  //this component displays a list of moveMoney records
  return (
    <FlatList 
      data={moveMoneys} 
      contentContainerStyle={{gap: 10, padding: 10}}
      renderItem={({item}) => <MoneyListItem moveMoney={item}/>}
    />
  )
}

const enhance = withObservables([], () => ({
  moveMoneys: moveMoneyCollection.query(
    //query by importing Q from watermelondb to sort the records by created_at in descending order
    //from the moveMoneys table
    Q.sortBy('created_at', Q.desc)
  ),
}));


export default enhance(moneyList); 