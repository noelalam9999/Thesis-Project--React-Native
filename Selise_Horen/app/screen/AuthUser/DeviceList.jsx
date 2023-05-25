import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  Dimensions,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";

import ClaimDevice from "./ClaimDevice";

import config from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SelectDropdown from "react-native-select-dropdown";
import { useFocusEffect } from "@react-navigation/native";
import { color } from "react-native-reanimated";
import horn from "../../../assets/image/horn.png";
import hours from "../../../assets/image/hours.png";
const selectData = ["Highest Device List", "Lowest Device List"];

const DeviceList = ({ navigation }) => {
  const [devices, setDevices] = useState([]);

  const [selectedSortOption, setSelectedSortOption] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      const fetchDevices = async () => {
        try {
          const userId = await AsyncStorage.getItem("userId");
          const response = await fetch(
            `${config.Device_URL}/device/user_id/${userId}`
          );
          const data = await response.json();
          setDevices(data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchDevices();
    }, [])
  );

  const handleVehiclePress = (device) => {
    navigation.navigate("DeviceDetail", { device });
  };

  const handleSortOptionChange = (value) => {
    setSelectedSortOption(value);
  };
  return (
    <View style={styles.container}>
      <View style={styles.claimedDevice}>
        <SelectDropdown
          data={selectData}
          buttonStyle={{
            backgroundColor: "#000000",
            borderRadius: 25,
            borderWidth: 1,
            borderColor: "#000000",
            marginTop: 20,
            width: "45%",
          }}
          buttonTextStyle={{ color: "#F7CF47", fontSize: 16 }}
          dropdownStyle={{ backgroundColor: "#F7CF47", borderRadius: 5 }}
          dropdownTextStyle={{ fontWeight: "bold", textAlign: "center" }}
          defaultButtonText="Sort Device List"
          dropdownIconPosition="right"
          dropdownIcon={
            <MaterialIcons name="arrow-drop-down" size={30} color="#F7CF47" />
          }
        />

        <TouchableOpacity onPress={() => navigation.navigate("Claim Device")}>
          {/* <Text style={styles.claimedText}>Claim Device</Text> */}
          <MaterialIcons name="qr-code-scanner" size={40} color="#000" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.vehiclesContainer}>
          {devices.map((device) => (
            <TouchableOpacity
              key={device.id}
              style={styles.vehicle}
              onPress={() => handleVehiclePress(device)}
            >
              <Text style={styles.name}>{device.RU_id}</Text>
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                  <Image
                    source={horn}
                    style={{ width: 25, height: 25 }}
                  ></Image>{" "}
                  : 30
                </Text>

                <Text style={styles.infoText}>
                  <Image
                    source={hours}
                    style={{ width: 25, height: 25 }}
                  ></Image>
                  : 4 Hour{" "}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F7CF47",
  },
  claimedDevice: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  searchButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#000000",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchIcon: {
    marginRight: 5,
  },
  scrollView: {
    marginTop: 20,
  },
  vehiclesContainer: {
    marginTop: 20,
  },
  vehicle: {
    backgroundColor: "#F7CF47",
    borderWidth: 1,
    borderColor: "#C5A538",
    borderRadius: 10,
    height: 60,
    marginBottom: 10,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "left",
    marginRight: 20,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  infoText: {
    marginLeft: 10,
    fontSize: 12,
    color: "#000000",
    textAlign: "right",
  },
});

export default DeviceList;
