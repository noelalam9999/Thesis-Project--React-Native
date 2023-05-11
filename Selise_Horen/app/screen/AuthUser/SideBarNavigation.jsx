import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "react-native";
import TabNavigator from "./BottomNavbarNav";
import ProfileScreen from "./profilescreen";
import DeviceList from "./DeviceList";
import PurchaseDevice from "./PurchaseDevice";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer style={{ backgroundColor: "black" }}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
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
          name="Horen"
          options={{
            drawerIcon: () => <Icon name="home" size={24} color="#F7CF47" />,
            title: "Horen",
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
          component={TabNavigator}
        />
        <Drawer.Screen
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
        />
        <Drawer.Screen
          name="Device List"
          options={{
            drawerIcon: () => (
              <Icon name="list-alt" size={24} color="#F7CF47" />
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
            },
          }}
          component={DeviceList}
        />
        <Drawer.Screen
          name="Purchase-Device"
          options={{
            drawerIcon: () => (
              <Icon name="buysellads" size={24} color="#F7CF47" />
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
            },
          }}
          component={ProfileScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
