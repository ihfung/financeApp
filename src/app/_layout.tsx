import { Slot, Stack, Tabs} from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Allocations',  tabBarIcon: ({size, color})=> <MaterialIcons name="attach-money" size={size} color="color" />}} />
      <Tabs.Screen name="accounts" options={{title: 'Accounts', tabBarIcon: ({size, color})=> <MaterialCommunityIcons name="account" size={size} color="color" />}} />
    </Tabs>
  );
}