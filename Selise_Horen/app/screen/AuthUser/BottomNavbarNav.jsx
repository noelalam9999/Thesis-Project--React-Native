import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './HomeScreen';
import LeaderboardScreen from './leaderboardScreen';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

export default TabNavigator = () => {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: 'black' }}
      tabBarOptions={{
        activeTintColor: 'white',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon name="home" size={24} color="#F7CF47" />,
          tabBarLabelStyle: {
            color: 'white',
          },
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="leaderboard" size={24} color="#F7CF47" />
          ),
          tabBarLabelStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Tab.Navigator>
  );
};
