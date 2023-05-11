import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Modal from "react-native-modal";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
const vehicles = [
  {
    id: 1,
    Ru_id: "123456",
    qr_code: "abcd1234",
    name: "Honda",
    device_configure: "configured",
  },
  {
    id: 2,
    Ru_id: "123456",
    qr_code: "abcd1234",
    name: "Toyota",
    device_configure: "configured",
  },
  {
    id: 3,

    Ru_id: "123456",
    qr_code: "abcd1234",

    device_configure: "configured",
    name: "Ford",
  },
  {
    id: 4,
    Ru_id: "123456",
    qr_code: "abcd1234",

    device_configure: "configured",
    name: "Chevrolet",
  },
  {
    id: 5,
    Ru_id: "123456",
    qr_code: "abcd1234",

    device_configure: "configured",
    name: "Tesla",
  },
  {
    id: 6,
    Ru_id: "123456",
    qr_code: "abcd1234",

    device_configure: "configured",
    name: "Nissan",
  },
  {
    id: 7,
    Ru_id: "123456",
    qr_code: "abcd1234",

    device_configure: "configured",
    name: "Mazda",
  },
  {
    id: 8,
    Ru_id: "123456",
    qr_code: "abcd1234",

    device_configure: "configured",
    name: "Subaru",
  },
  {
    id: 9,
    Ru_id: "123456",
    qr_code: "abcd1234",

    device_configure: "configured",
    name: "Jeep",
  },
  {
    id: 10,
    Ru_id: "123456",
    qr_code: "abcd1234",

    device_configure: "configured",
    name: "Audi",
  },
  {
    id: 11,
    Ru_id: "123456",
    qr_code: "abcd1234",

    device_configure: "configured",
    name: "BMW",
  },
  {
    id: 12,
    Ru_id: "123456",
    qr_code: "abcd1234",

    device_configure: "configured",
    name: "Mercedes-Benz",
  },
  {
    id: 13,
    Ru_id: "123456",
    qr_code: "abcd1234",

    device_configure: "configured",
    name: "Volkswagen",
  },
  {
    id: 14,
    Ru_id: "123456",
    qr_code: "abcd1234",

    device_configure: "configured",
    name: "Ferrari",
  },
  {
    id: 15,
    Ru_id: "123456",
    qr_code: "abcd1234",

    device_configure: "configured",
    name: "Lamborghini",
  },
];
const DeviceList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleVehiclePress = (vehicle) => {
    setSelectedVehicle(vehicle);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setSelectedVehicle(null);
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.claimedDevice}>
        <TouchableOpacity style={styles.searchButton}>
          <MaterialIcons
            name="search"
            size={24}
            color="#000000"
            style={styles.searchIcon}
          />
          <TextInput>Search Device</TextInput>
        </TouchableOpacity>
        <TouchableOpacity style={styles.claimedButton}>
          <Text style={styles.claimedText}>Claim Device</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.vehiclesContainer}>
          {vehicles.map((vehicle) => (
            <TouchableOpacity
              key={vehicle.id}
              style={styles.vehicle}
              onPress={() => handleVehiclePress(vehicle)}
            >
              <Text style={styles.name}>{vehicle.name}</Text>
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                  <Icon name="bullhorn" size={20} color="#000000" /> : 30
                </Text>
                <Text style={styles.infoText}>
                  <MaterialIcons name="drive-eta" size={20} color={"#000000"} />
                  : 15Km{" "}
                </Text>
                <Text style={styles.infoText}>
                  <Icon name="hourglass-2" size={20} color="#000000" /> : 4 Hour{" "}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            {selectedVehicle ? selectedVehicle.name : ""}
          </Text>

          {/* <Text>{selectedVehicle.qr_code}</Text>
          <Text>{selectedVehicle.device_configure}</Text> */}

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
  claimedButton: {
    backgroundColor: "#000000",
    borderRadius: 20,
    padding: 10,
  },
  claimedText: {
    color: "#F7CF47",
    fontWeight: "bold",
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
    height: "6%",
    marginBottom: 7,
    padding: 12,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.27,
    // shadowRadius: 2.62,

    //elevation: 8,
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
    marginRight: 70,
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
    backgroundColor: "#000000",
    borderRadius: 10,
    width: "80%",
    height: "50%",
    marginHorizontal: "10%",
    paddingHorizontal: 20,
  },
  modalText: {
    color: "#F7CF47",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#F7CF47",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default DeviceList;
