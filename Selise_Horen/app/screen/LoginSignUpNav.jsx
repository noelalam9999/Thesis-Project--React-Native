import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignupScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

export default LoginSignUp = () => {
  return (
    <NavigationContainer style={{ backgroundColor: '#F7CF47' }}>
      <StatusBar barStyle="light-content" backgroundColor="#F7CF47" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F7CF47',
          },
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
