import { Slot, Stack, Tabs} from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootLayout() {
  return (
    <Tabs> //creates tab bar at the bottom of the screen
      <Tabs.Screen 
        name="moveMoney" 
        options={{ 
          title: 'Move Money', 
          headerShown: false, 
          tabBarIcon: ({size, color})=> 
            <MaterialIcons 
              name="attach-money" 
              size={size} 
              color="color" />}} 
      />
      <Tabs.Screen 
        name="accounts" 
        options={{
          title: 'Accounts', 
          tabBarIcon: ({size, color})=> 
            <MaterialCommunityIcons 
              name="account" 
              size={size}  
              color="color" />}} 
      />
      <Tabs.Screen name='index' options={{href: null}}/>  //removes the index tab at the bottom of the tab bar
    </Tabs>
  );
}

