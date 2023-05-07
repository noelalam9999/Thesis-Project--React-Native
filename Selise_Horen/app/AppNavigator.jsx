import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './screen/HomeScreen';
import ProfileScreen from './screen/profilescreen';
import NotificationScreen from './screen/NotificationScreen';
import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScree';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StatusBar } from 'react-native';
const Tab = createMaterialBottomTabNavigator();

const Drawer = createDrawerNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: 'black' }}
      tabBarOptions={{
        activeTintColor: 'white',
      }}>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Icon name="user" size={24} color="#F9C900" />,
          tabBarLabelStyle: {
            color: 'white',
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarIcon: () => <Icon name="bell" size={24} color="#F9C900" />,
          tabBarLabelStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer style={{ backgroundColor: 'black' }}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: 'black',
          },
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Drawer.Screen
          name="Home"
          options={{
            drawerIcon: ({ color }) => (
              <Icon name="home" size={24} color="#F9C900" />
            ),
          }}
          component={TabNavigator}
        />
        <Drawer.Screen
          name="SignUp"
          options={{
            drawerIcon: () => <Icon name="sign-in" size={24} color="#F9C900" />,
          }}
          component={SignupScreen}
        />
        <Drawer.Screen
          name="Login"
          options={{
            drawerIcon: () => (
              <Icon name="user-plus" size={24} color="#F9C900" />
            ),
          }}
          component={LoginScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
