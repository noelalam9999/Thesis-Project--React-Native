import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./HomeScreen";
import DeviceList from "./DeviceList";
import LeaderboardScreen from "./leaderboardScreen";
import { MaterialIcons } from "@expo/vector-icons";

import Icon from "react-native-vector-icons/Ionicons";

import {
  DefaultTheme,
  Provider as PaperProvider,
  useTheme,
} from "react-native-paper";

const Tab = createMaterialBottomTabNavigator();
const MyTheme = {
  colors: {
    secondaryContainer: "#F7CF47",
  },
};

export default TabNavigator = () => {
  const theme = useTheme();

  return (
    <PaperProvider theme={MyTheme}>
      <Tab.Navigator
        labeled={false}
        tabBarOptipns={{
          showLabel: false,
        }}
        barStyle={{ backgroundColor: "black" }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="home"
                size={24}
                color={focused ? "black" : "#F7CF47"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Devices"
          component={DeviceList}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="ios-bar-chart-outline"
                size={28}
                color={focused ? "black" : "#F7CF47"}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Leaderboard"
          component={LeaderboardScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="leaderboard"
                size={24}
                color={focused ? "black" : "#F7CF47"}
              />
            ),
            // tabBarLabelStyle: {
            //   fontWeight: "bold",
            // },
          }}
        />
      </Tab.Navigator>
    </PaperProvider>
  );
};
