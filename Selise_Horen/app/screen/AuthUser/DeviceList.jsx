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
    name: "Ford",
    device_configure: "configured",
  },
  {
    id: 4,
    name: "Chevrolet",
  },
  {
    id: 5,
    name: "Tesla",
  },
  {
    id: 6,
    name: "Nissan",
  },
  {
    id: 7,
    name: "Mazda",
  },
  {
    id: 8,
    name: "Subaru",
  },
  {
    id: 9,
    name: "Jeep",
  },
  {
    id: 10,
    name: "Audi",
  },
  {
    id: 11,
    name: "BMW",
  },
  {
    id: 12,
    name: "Mercedes-Benz",
  },
  {
    id: 13,
    name: "Volkswagen",
  },
  {
    id: 14,
    name: "Ferrari",
  },
  {
    id: 15,
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
          <Text style={styles.claimedText}>Claimed Device</Text>
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
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            {selectedVehicle ? selectedVehicle.name : ""}
          </Text>
          <Text>{vehicles.Ru_id}</Text>
          <Text>{vehicles.qr_code}</Text>
          <Text>{vehicles.device_configure}</Text>

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
    borderRadius: 20,
    backgroundColor: "#F7CF47",
    padding: 12,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: "black",
  },
  name: {
    color: "#000000",

    fontSize: 15,
  },
  modalContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    width: "80%",
    height: "50%",
    marginHorizontal: "10%",
    paddingHorizontal: 20,
  },
  modalText: {
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
