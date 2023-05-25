import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LineChart } from "react-native-chart-kit";

import angry from "../../../assets/image/angry.png";
import party from "../../../assets/image/party-popper.png";
import road from "../../../assets/image/road.png";
import hour from "../../../assets/image/24-hours.png";
import config from '../../config'

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

const DeviceDetail = ({ route, navigation }) => {
    const [deviceInfo, setDeviceInfo] = useState(null);
    const { device } = route.params;
    const handleUnclaimDevice = async () => {
        try {
          const ruId = device.RU_id; 
          console.log(ruId)
          const updateDeviceInfo = { ...device, user_id: "" };
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
    
          setDeviceInfo(updateDeviceInfo);
         console.log("Device Unclaimed")
        } catch (error) {
          console.log(error);
        }
      };
    

  return (
    <View style={styles.container}>
      <Text style={styles.deviceId}>{device.RU_id}</Text>

      <View style={styles.statusContainer}>
        <View style={styles.statusItem}>
          <Image source={angry} style={styles.statusImage} />
          <Text style={styles.statusText}>Noisy Device</Text>
        </View>
        <View style={styles.statusItem}>
          <Image source={party} style={styles.statusImage} />
          <Text style={styles.statusText}>Your device top rank</Text>
        </View>
      </View>

      <View style={styles.statusContainer}>
        <View style={styles.statusItem}>
          <Image source={road} style={styles.statusImage} />
          <Text style={styles.statusText}>0.5% Horn per km</Text>
        </View>
        <View style={styles.statusItem}>
          <Image source={hour} style={styles.statusImage} />
          <Text style={styles.statusText}>0.5% Horn per hour</Text>
        </View>
      </View>

      <Text style={styles.chartTitle}>Percentage of honks per day</Text>

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
        width={380}
        height={220}
        chartConfig={{
          backgroundColor: "#F7CF47",
          backgroundGradientFrom: "#F7CF47",
          backgroundGradientTo: "#F7CF47",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        bezier
        style={styles.chart}
      />
      <View style={styles.backButtonContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonIcon}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={handleUnclaimDevice}>
            <Text style={styles.backButtonIcon}>Unclaim</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#F7CF47",
  },
  deviceId: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statusItem: {
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
  statusImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginBottom: 10,
  },
  statusText: {
    color: "#000",
    fontWeight: "bold",
  },

  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
    marginBottom: 30,
    textAlign: "center",
  },
  chart: {
    marginVertical: 8,
    marginLeft: -8,
    marginRight: 30,
  },
  backButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
   marginTop:50,
  },
  backButton: {
    //marginBottom: 30,
    padding: 10,
    backgroundColor: "#F7CF47",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backButtonIcon: {
    color: "#000",
  },
});

export default DeviceDetail;
