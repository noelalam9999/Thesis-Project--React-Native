import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  Dimensions,
  Button,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Constants from "expo-constants";
import config from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from "react-native-modal";
import horn from "../../../assets/image/horn.png";
import hours from "../../../assets/image/hours.png";
import angry from "../../../assets/image/angry.png";
import party from "../../../assets/image/party-popper.png";
import road from "../../../assets/image/road.png";
import hour from "../../../assets/image/24-hours.png";
import sad from "../../../assets/image/sad.png";

import { LineChart } from "react-native-chart-kit";
import { useFocusEffect } from "@react-navigation/core";
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

const ClaimDevice = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [claimedAlertVisible, setClaimedAlertVisible] = useState(false);
  const [scannedAlertVisible, setScannedAlertVisible] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
      };

      getBarCodeScannerPermissions();
    }, [])
  );

  const handleBarCodeScanned = async ({ type, data }) => {
    try {
      setScanned(true);

      const userId = await AsyncStorage.getItem("userId");
      const ruId = data.split("/")[1].trim();

      const deviceInfoResponse = await fetch(
        `${config.Device_URL}/device/${ruId}`
      );

      const deviceInfo = await deviceInfoResponse.json();
      console.log("deviceInfo", deviceInfo);
      if (deviceInfo[0].user_id) {
        setClaimedAlertVisible(true);
      } else {
        const updateDeviceInfo = { ...deviceInfo, user_id: userId };
        const updateResult = await fetch(
          `${config.Device_URL}/device/${ruId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateDeviceInfo),
          }
        );
        const result = await updateResult.json();

        setScannedAlertVisible(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSeeStats = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <View style={styles.wrapBox}>
          {claimedAlertVisible && (
            <>
              <Image source={sad} style={{ height: 30, width: 30 }}></Image>
              <Text style={styles.alertText}>Oops, device already claimed</Text>
            </>
          )}
          {scannedAlertVisible && !claimedAlertVisible && (
            <>
              <Image source={party} style={{ height: 30, width: 30 }}></Image>
              <Text style={styles.alertText}>
                Congratulation,Your device has been claimed.
              </Text>
            </>
          )}

          <View style={{ flexDirection: "row", marginBottom: 10, gap: 15 }}>
            <TouchableOpacity
              style={styles.statsButton}
              onPress={handleSeeStats}
            >
              <Text style={styles.statsButtonText}>See Stats</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.scanAgainButton}
              onPress={() => setScanned(false)}
            >
              <Text style={styles.scanAgainButtonText}>Tap to Scan Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.detailsContainer}>
            {/* <Text style={styles.detailsText}>QR Code: random qr code</Text>
            <Text style={styles.detailsText}>
              Device Configure: some random device configured
            </Text> */}
          </View>
          <View style={styles.boxContainer}>
            <View style={styles.boxRow}>
              <View style={styles.box}>
                <Image source={angry} style={styles.icon} />
                <Text style={styles.boxText}>Too much noisy Device</Text>
              </View>
              <View style={styles.box}>
                <Image source={party} style={styles.icon} />
                <Text style={styles.boxText}>Your device top rank</Text>
              </View>
            </View>
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
            width={Dimensions.get("window").width}
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
            onPress={() => setModalVisible(false)}
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
    backgroundColor: "#F7CF47",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },

  wrapBox: {
    backgroundColor: "#000",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    alignItems: "center",
  },
  statsButton: {
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7CF47",
    borderRadius: 15,
    marginBottom: 10,
  },
  statsButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  scanAgainButton: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7CF47",
    borderRadius: 15,
  },
  scanAgainButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  alertText: {
    marginTop: 10,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: "bold",
    color: "#F7CF47",
  },
  modalContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7CF47",
    //borderRadius: 10,
    width: Dimensions.get("window").width,
    height: "100%",
    // marginHorizontal: "10%",
    // paddingHorizontal: 20,
    marginLeft: -20,
    marginBottom: -60,
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
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
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
    padding: 10,
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
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  boxText: {
    flexDirection: "column",
    fontSize: 16,
    color: "#000",
    textAlign: "center",
  },
  closeButton: {
    marginTop: 80,
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeButtonText: {
    color: "#F7CF47",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default ClaimDevice;
