import { Redirect, Slot, Stack, Tabs} from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {useAuth} from '../../providers/AuthProvider';


export default function TabsLayout() {

  const {isAuthenticated} = useAuth();

  if(!isAuthenticated){
    return <Redirect href={"/login"} />
  }

  return (
    //creates tab bar at the bottom of the screen
    <Tabs> 
      <Tabs.Screen 
        name="moveMoney" 
        options={{ 
          title: 'Move Money', 
          headerShown: false, 
          tabBarIcon: ({size, color})=> 
            (<MaterialIcons 
              name="attach-money" 
              size={size} 
              color="color" 
            />),
          }} 
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
       {/* //removes the index tab at the bottom of the tab bar */}
      {/* <Tabs.Screen name='index' options={{href: null}}/>  */}
    </Tabs>
  );
}

