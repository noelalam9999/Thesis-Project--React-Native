import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignupScreen";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import HomeScreen from "./AuthUser/HomeScreen";
import EditProfile from "./AuthUser/EditProfile";
const Stack = createStackNavigator();

export default LoginSignUp = () => {
  return (
    <NavigationContainer style={{ backgroundColor: "#F7CF47" }}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#000000",
          },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Horen" component={HomeScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
