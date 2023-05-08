import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'react-native';
import TabNavigator from './BottomNavbarNav';

const Drawer = createDrawerNavigator();

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
          name="HomePage"
          options={{
            drawerIcon: () => <Icon name="home" size={24} color="#F7CF47" />,
          }}
          component={TabNavigator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
