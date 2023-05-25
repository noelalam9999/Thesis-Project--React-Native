import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HeatMap from "./HeatMapscreen";
import ProfileScreen from "./profilescreen";
import DeviceList from "./DeviceList";
import PurchaseDevice from "./PurchaseDevice";
import OrderStatus from "./OrderStatus";
import SuccessScreen from "./SuccessScreen";
import HomeScreen from "./HomeScreen";
import LoginScreen from "../LoginScreen";
import SignupScreen from "../SignupScreen";
import DeviceDetail from "./DeviceDetails";
import EditProfile from "./EditProfile";
import LeaderboardScreen from "./leaderboardScreen";
import { MaterialIcons } from "@expo/vector-icons";
import {
  DefaultTheme,
  Provider as PaperProvider,
  useTheme,
} from "react-native-paper";
import { useEffect, useState } from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ClaimDevice from "./ClaimDevice";
import { TouchableOpacity } from "react-native";
import EditProfile from "./EditProfile";
import DeviceDetail from "./DeviceDetails";

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const MyTheme = {
  colors: {
    secondaryContainer: "#F7CF47",
  },
};
const TabNavigator = () => {
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
                name="list-alt"
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

const AppNavigator = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) setLoggedIn(true);
      } catch (error) {
        console.log(error);
      }
    };
    checkLoggedIn();
  }, []);
  return (
    <NavigationContainer style={{ backgroundColor: "black" }}>
      <StatusBar barStyle="light-content" backgroundColor="black" />

      {loggedIn ? (
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              flex: 1,
              justifyContent: "space-between",
              backgroundColor: "black",
            },
            drawerActiveTintColor: "white",
            drawerInactiveTintColor: "white",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Drawer.Screen
            name="DashBoard"
            options={{
              drawerIcon: () => <Icon name="home" size={24} color="#F7CF47" style={{ paddingLeft: 20 }} />,
              title: "Dashboard",
              headerStyle: {
                backgroundColor: "#000000",
              },
              headerTintColor: "#F7CF47",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "#F7CF47",
              },
              drawerLabelStyle: {
                color: "#F7CF47",
                marginLeft: -15,
                
              },
            }}
            component={TabNavigator}
          />
          <Drawer.Screen
            name="Heat map"
            options={{
              drawerIcon: () => (
                <Icon name="map-marker" size={24} color="#F7CF47" style={{ paddingLeft: 20 }}/>
              ),

              headerStyle: {
                backgroundColor: "#000000",
              },
              headerTintColor: "#F7CF47",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "#F7CF47",
              },
              drawerLabelStyle: {
                color: "#F7CF47",
                marginLeft: -5,
              },
            }}
            component={HeatMap}
          />
          <Drawer.Screen
            name="Device List"
            options={{
              drawerIcon: () => (
                <Icon name="list-alt" size={24} color="#F7CF47"style={{ paddingLeft: 20 }} />
              ),

              headerStyle: {
                backgroundColor: "#000000",
              },
              headerTintColor: "#F7CF47",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "#F7CF47",
              },
              drawerLabelStyle: {
                color: "#F7CF47",
                marginLeft: -15,
              },
            }}
            component={DeviceList}
          />
          <Drawer.Screen
            name="Order Status"
            options={{
              drawerIcon: () => <Icon name="check" size={24} color="#F7CF47"   style={{ paddingLeft: 20 }}/>,

              headerStyle: {
                backgroundColor: "#000000",
              },
              headerTintColor: "#F7CF47",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "#F7CF47",
              },
              drawerLabelStyle: {
                color: "#F7CF47",
                marginLeft: -15,
              },
            }}
            component={OrderStatus}
          />
          <Drawer.Screen
            name="Profile"
            options={{
              drawerIcon: () => <Icon name="user" size={24} color="#F7CF47"  style={{ paddingLeft: 20 }} />,

              headerStyle: {
                backgroundColor: "#000000",
              },
              headerTintColor: "#F7CF47",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "#F7CF47",
              },
              drawerLabelStyle: {
                color: "#F7CF47",
                marginLeft: -8,
              },
            }}
            initialParams={{
              isLoggedIn: setLoggedIn,
            }}
            component={ProfileScreen}
          />
          <Drawer.Screen
            name="Purchase-Device"
            options={{
              drawerIcon: () => (
                <Icon name="buysellads" size={24} color="#F7CF47"   style={{ paddingLeft: 20 }} />
              ),

              headerStyle: {
                backgroundColor: "#000000",
              },
              headerTintColor: "#F7CF47",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "#F7CF47",
                marginLeft: -10,
              },
              drawerLabelStyle: {
                color: "#F7CF47",
                marginLeft: -10,
              },
            }}
            component={PurchaseDevice}
          />
          <Drawer.Screen
            name="Claim Device"
            options={{
              drawerIcon: () => (
                <MaterialIcons
                  name="qr-code-scanner"
                  size={24}
                  color="#F7CF47"
                  style={{ paddingLeft: 20 }}
                />
              ),
              headerStyle: {
                backgroundColor: "#000000",
              },
              headerTintColor: "#F7CF47",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "#F7CF47",
              },
              drawerLabelStyle: {
                color: "#F7CF47",
                marginLeft: -13,
              },
            }}
            component={ClaimDevice}
          />
           {/* Hide screen */}
         <Drawer.Screen
         name="EditProfile"
         options={{
           drawerItemStyle: { display: "none" },
           headerStyle: {
             backgroundColor: "#000000",
           },
           headerTintColor: "#F7CF47",
           headerTitleStyle: {
             fontWeight: "bold",
             color: "#F7CF47",
           },
         }}
         component={EditProfile}
       />
       <Drawer.Screen
            name="DeviceDetail"
            options={{
              drawerItemStyle: { display: "none" },
              headerStyle: {
                backgroundColor: "#000000",
              },
              headerTintColor: "#F7CF47",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "#F7CF47",
              },
            }}
            component={DeviceDetail}
          />
        </Drawer.Navigator>
        
      ) : (
        <Drawer.Navigator>
          <Drawer.Screen
            name="SignUp"
            options={{
              drawerIcon: () => (
                <Icon name="sign-in" size={24} color="#F7CF47" />
              ),
            }}
            component={SignupScreen}
            initialParams={{
              isLoggedIn: setLoggedIn,
            }}
          />
          <Drawer.Screen
            name="Login"
            options={{
              drawerIcon: () => (
                <Icon name="user-plus" size={24} color="#F7CF47" />
              ),
            }}
            component={LoginScreen}
            initialParams={{
              isLoggedIn: setLoggedIn,
            }}
          />

          {/* <Drawer.Screen
            name="Profile"
            options={{
              drawerIcon: () => <Icon name="user" size={24} color="#F7CF47" />,

              headerStyle: {
                backgroundColor: "#000000",
              },
              headerTintColor: "#F7CF47",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "#F7CF47",
              },
              drawerLabelStyle: {
                color: "#F7CF47",
              },
            }}
            component={ProfileScreen}
          /> */}
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
