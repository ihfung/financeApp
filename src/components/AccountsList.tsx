import { FlatList } from "react-native";
import AccountListItem from "./AccountListItem";

export default function AccountsList(){
  return (
      // FlatList is a component that renders a list of items and in this case we are rendering AccountListItem
      <FlatList 
        data={[1, 2, 3]}
        contentContainerStyle={{gap: 5}} // gap is the space between each item in the list so we can scroll through the list
        renderItem={() => <AccountListItem />}
      />
    
  )
}