import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Constants from "expo-constants";
import config from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ClaimDevice = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    try {
      setScanned(true);

      alert(`Bar code with type ${type} and data ${data} has been scanned!`);

      const userId = await AsyncStorage.getItem("userId");
      const ruId = data.split("/")[1].trim();
      //console.log(ruId);

      const deviceInfoResponse = await fetch(
        `${config.Device_URL}/device/${ruId}`
      );

      const deviceInfo = await deviceInfoResponse.json();
      const updateDeviceInfo = { ...deviceInfo, user_id: userId };
      //console.log(updateDeviceInfo);
      const updateResult = await fetch(`${config.Device_URL}/device/${ruId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateDeviceInfo),
      });
      const result = await updateResult.json();
      console.log("Device updated:", result);
    } catch (error) {
      console.log(error);
    }
  };

  if (hasPermission === null) {
    return (
      <Text style={{ marginTop: Constants.statusBarHeight }}>
        Requesting for camera permission
      </Text>
    );
  }
  if (hasPermission === false) {
    return (
      <Text style={{ marginTop: Constants.statusBarHeight }}>
        No access to camera
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
export default ClaimDevice;
