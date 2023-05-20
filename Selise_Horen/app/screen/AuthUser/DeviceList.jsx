import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import Modal from "react-native-modal";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import horn from "../../../assets/image/horn.png";
import hours from "../../../assets/image/hours.png";
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
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            {selectedVehicle ? selectedVehicle.name : ""}
          </Text>

          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>QR Code: random qr code</Text>
            <Text style={styles.detailsText}>
              Device Configure:some randome device configured
            </Text>
          </View>

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
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  claimedText: {
    color: "#F7CF47",
    fontWeight: "bold",
    fontSize: 16,
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
  modalContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7CF47",
    borderRadius: 10,
    width: "80%",
    height: "50%",
    marginHorizontal: "10%",
    paddingHorizontal: 20,
    elevation: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
  },
  modalText: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#000000",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: "#F7CF47",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  detailsContainer: {
    marginTop: 20,
  },
  detailsText: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default DeviceList;
