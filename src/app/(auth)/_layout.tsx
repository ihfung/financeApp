import { View, Text } from 'react-native';
import { Stack, Redirect} from 'expo-router';
import { useAuth } from '../../providers/AuthProvider';


const AuthLayout = () => {
  const {isAuthenticated} = useAuth();

  if(isAuthenticated){
    return <Redirect href={'/'} />;
  }

  return <Stack />;
}

export default AuthLayout;