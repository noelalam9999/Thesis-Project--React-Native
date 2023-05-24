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
import Modal from "react-native-modal";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import horn from "../../../assets/image/horn.png";
import hours from "../../../assets/image/hours.png";
import angry from "../../../assets/image/angry.png";
import party from "../../../assets/image/party-popper.png";
import road from "../../../assets/image/road.png";
import hour from "../../../assets/image/24-hours.png";
import ClaimDevice from "./ClaimDevice";
import { LineChart } from "react-native-chart-kit";
import config from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SelectDropdown from "react-native-select-dropdown";
import { useFocusEffect } from "@react-navigation/native";

const data = [
  {
    name: "Sat",
    honks: 10,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Sun",
    honks: 5,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Mon",
    honks: 8,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Tue",
    honks: 12,
    color: "green",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Wed",
    honks: 7,
    color: "blue",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Thu",
    honks: 15,
    color: "yellow",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Fri",
    honks: 9,
    color: "purple",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];
const selectData = ["Highest Device List", "Lowest Device List"];

const DeviceList = ({ navigation }) => {
  const [devices, setDevices] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
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

  const handleVehiclePress = (vehicle) => {
    setSelectedVehicle(vehicle);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setSelectedVehicle(null);
    setModalVisible(false);
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
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modalContainer} blu>
          <Text style={styles.modalText}>
            {selectedVehicle ? selectedVehicle.RU_id : ""}
          </Text>
          <View style={styles.detailsContainer}>
            {/* <Text style={styles.detailsText}>QR Code: random qr code</Text>
            <Text style={styles.detailsText}>
              Device Configure: some random device configured
            </Text> */}
          </View>
          <View style={styles.boxContainer}>
            {/* <View style={styles.boxRow}>
              <View style={styles.box}>
                <Image source={angry} style={styles.icon} />
                <Text style={styles.boxText}>Too much noisy Device</Text>
              </View>
              <View style={styles.box}>
                <Image source={party} style={styles.icon} />
                <Text style={styles.boxText}>Your device top rank</Text>
              </View>
            </View> */}
            <View style={styles.boxRow}>
              <View style={styles.box}>
                <Image source={road} style={styles.icon} />
                <Text style={styles.boxText}>0.5% Horn per km</Text>
              </View>
              <View style={styles.box}>
                <Image source={hour} style={styles.icon} />
                <Text style={styles.boxText}>0.5% Horn per hour</Text>
              </View>
            </View>
          </View>

          <Text style={{ marginTop: 30, fontWeight: "bold" }}>
            Percentage of honks per day
          </Text>
          <LineChart
            data={{
              labels: data.map((item) => item.name),
              datasets: [
                {
                  data: data.map((item) => item.honks),
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                },
              ],
            }}
            width={300}
            height={220}
            chartConfig={{
              backgroundColor: "#F7CF47",
              backgroundGradientFrom: "#F7CF47",
              backgroundGradientTo: "#F7CF47",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={handleCloseModal}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  // claimedButton: {
  //   backgroundColor: "#000000",
  //   borderRadius: 20,
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  // },
  // claimedText: {
  //   color: "#F7CF47",
  //   fontWeight: "bold",
  //   fontSize: 16,
  // },
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
  modalContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7CF47",
    borderRadius: 10,
    // width: Dimensions.get("window").width,
    width: "95%",
    height: "70%",
    // marginHorizontal: "10%",
    // paddingHorizontal: 20,
    marginLeft: 10,
    marginBottom: -40,

    elevation: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },

  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 5,
  },
  boxContainer: {
    flexDirection: "column",
    marginBottom: 20,
  },
  boxRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    gap: 10,
  },
  box: {
    alignItems: "center",
    backgroundColor: "#F7CF47",
    justifyContent: "center",
    borderRadius: 15,
    padding: 8,
    shadowColor: "#000",
    width: "45%",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  icon: {
    width: 20,
    height: 20,
    marginTop: 5,
  },
  boxText: {
    flexDirection: "column",
    fontSize: 16,
    color: "#000",
    textAlign: "center",
  },
  closeButton: {
    marginTop: 5,
    backgroundColor: "#000",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeButtonText: {
    color: "#F7CF47",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DeviceList;
