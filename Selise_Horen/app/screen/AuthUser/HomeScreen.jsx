import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { VictoryScatter, VictoryChart, Rect } from "victory-native";
import badge from "../../../assets/image/black-badge.png";
import noise from "../../../assets/image/noise.png";
import pollution from "../../../assets/image/noise-pollution.png";
import road from "../../../assets/image/road.png";
import hour from "../../../assets/image/24-hours.png";

import { useFocusEffect } from "@react-navigation/core";
import config from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";




const Devices = [
  "Device Change",
  "Toyota Camry",
  "Honda Civic",
  "Ford Mustang",
  "Chevrolet Corvette",
  "BMW M3",
  "Audi A4",
];

const data = new Array(200).fill(0).reduce(
  (prev, curr) => [
    ...prev,
    {
      x: Math.random() * 35,
      y: Math.random() * 35,
    },
  ],
  []
);

const chartData3 = [];
for (let x = -30; x <= 30; x++) {
  const y = Math.exp(-(x * x) / 100);
  chartData3.push({ x, y });

}

const HomeScreen = () => {
  const [isYearView, setIsYearView] = useState(true);
  const [isMonthView, setIsMonthView] = useState(false);
  const [chart1Data, setchart1DAta] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchchartData = async () => {
        try {
          const userId = await AsyncStorage.getItem("userId");
          const deviceResponse = await fetch(
            `${config.Device_URL}/device/user_id/${userId}`
          );
          const deviceData = await deviceResponse.json();


          const ruId = deviceData[0].RU_id;


          const requestBody = {
            deviceRUids: [ruId],
          };
          console.log("req", requestBody);
          const response = await fetch(
            `${config.SIGNAL_URL}/signal/SignalSumByDateByDevices`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(requestBody),
            }
          );
          const chartData = await response.json().then((res) => {
            return res.map((item) => {
              return {
                x: item._id,
                y: item.horn_count,
              };
            });
          });
          console.log(chartData);
          setchart1DAta(chartData);
        } catch (error) {
          console.log(error);
        }
      };
      fetchchartData();
    }, [])
  );

  const handlePress = () => {
    if (isYearView) {
      setIsYearView(false);
      setIsMonthView(true);
      return;
    }
    if (isMonthView) {
      setIsYearView(false);
      setIsMonthView(false);
      return;
    }
    setIsYearView(true);
    setIsMonthView(false);
  };
  const progress = 0.5;
  const level = Math.ceil(progress * 10);

  return (
    <View style={styles.background}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={badge} style={styles.badgeImage} />
          <Text style={styles.title}>Frequent Honker</Text>
        </View>
        <View style={styles.progressBarContainer}>
          {[...Array(10)].map((_, index) => (
            <View
              key={index}
              style={[
                styles.level,
                index < level ? styles.activeLevel : styles.inactiveLevel,
              ]}
            />
          ))}
        </View>
        <Text style={styles.levelText}>
          Maintain 4 horns to move to the next level
        </Text>
        <View style={styles.wrapContainer}>
          <View style={styles.boxContainer}>
            <View style={styles.box}>
              <Image
                source={pollution}
                style={{ width: 30, height: 30 }}
              ></Image>
              <Text style={styles.boxText}>
                You are in top 5% of sound polluter
              </Text>
            </View>
            <View style={styles.box}>
              <Image source={noise} style={{ width: 30, height: 30 }}></Image>
              <Text style={styles.boxText}>
                Today you were exposed to 10 decibel
              </Text>
            </View>
          </View>
          <View style={styles.boxContainer}>
            <View style={styles.box}>
              <Image source={road} style={{ width: 30, height: 30 }}></Image>
              <Text style={styles.boxText}>0.31% Horn per Km</Text>
            </View>
            <View style={styles.box}>
              <Image source={hour} style={{ width: 30, height: 30 }}></Image>
              <Text style={styles.boxText}>0.45% horn per hour</Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text
              style={[
                styles.buttonText,
                isYearView ? styles.activeButtonText : null,
              ]}
            >
              {isYearView && "Year View"}
              {isMonthView && "Month View"}
              {!isYearView && !isMonthView && "Week View"}
            </Text>
          </TouchableOpacity>

          <SelectDropdown
            data={Devices}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonStyle={styles.dropdownButton}
            buttonTextStyle={styles.dropdownButtonText}
            dropdownStyle={styles.dropdown}
            dropdownTextStyle={styles.dropdownText}
            defaultButtonText="Device change"
          />
        </View>

        <View style={styles.containerWrapper}>
          <View style={styles.flexContainer}>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text
                style={[
                  styles.buttonText,
                  isYearView ? styles.activeButtonText : null,
                ]}
              >
                {isYearView && "Year View"}
                {isMonthView && "Month View"}
                {!isYearView && !isMonthView && "Week View"}
              </Text>
            </TouchableOpacity>

            <SelectDropdown
              data={Devices}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonStyle={styles.dropdownButton}
              buttonTextStyle={styles.dropdownButtonText}
              dropdownStyle={styles.dropdown}
              dropdownTextStyle={styles.dropdownText}
              defaultButtonText="Device change"
            />
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontSize: 15 }}>Number of Horns played per day</Text>
          </View>
          {
            chart1Data.length > 0 ?  (
            <LineChart
            data={{
              labels: chart1Data.map((dataPoint) => dataPoint.x),
              datasets: [
                {
                  data: chart1Data.map((dataPoint) => dataPoint.y),
                },
              ],
            }}
            width={Dimensions.get("window").width}
            height={220}
            yAxisSuffix=""
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: "#F7CF47",
              backgroundGradientFrom: "#F7CF47",
              backgroundGradientTo: "#F7CF47",
              decimalPlaces: 2,

              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
              marginTop: 20,
              marginLeft: 8,
              marginRight: 30,
            }}
          />
            ) : null
          }
          
        </View>
        <View style={styles.containerWrapper}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 15 }}>Global Ranking</Text>
          </View>
          <LineChart
            data={{
              labels: chartData3
                .map((dataPoint) => dataPoint.x)
                .filter((x, index) => index % 10 === 0),
              datasets: [
                {
                  data: chartData3.map((dataPoint) => dataPoint.y),
                },
              ],
            }}
            width={Dimensions.get("window").width}
            height={220}
            yAxisSuffix="%"
            yAxisInterval={10}
            chartConfig={{
              backgroundColor: "#F7CF47",
              backgroundGradientFrom: "#F7CF47",
              backgroundGradientTo: "#F7CF47",
              decimalPlaces: 2,
              xAxisLabel: "Time",
              yAxisLabel: "Decibel",

              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
              marginTop: 20,
              marginLeft: 3,
              marginRight: 26,
            }}
          />
        </View>

        <View style={styles.containerWrapper}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Number of Horns vs Distance Travelled
            </Text>
          </View>
          <View style={{ marginLeft: 13 }}>
            <VictoryChart domain={{ x: [0, 35], y: [0, 35] }}>
              <VictoryScatter
                data={data}
                size={4}
                style={{ data: { fill: "black" } }}
              />
            </VictoryChart>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#F7CF47",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 39,
    marginTop: 20,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#000000",
    width: "50%",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#000000",
    height: "30px",
  },
  dropdownButton: {
    paddingVertical: 2,
    backgroundColor: "#000000",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 20,
    width: "50%",
  },
  dropdownButtonText: {
    color: "#F7CF47",
    fontSize: 16,
  },
  activeButton: {
    backgroundColor: "#000000",
    borderColor: "#000000",
  },
  buttonText: {
    color: "#F7CF47",
    // fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  activeButtonText: {
    color: "#F7CF47",
  },

  dropdown: {
    backgroundColor: "#F7CF47",
    borderRadius: 5,
  },
  dropdownText: {
    fontWeight: "bold",
    textAlign: "center",
    // padding: 10,
  },
  imageContainer: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  badgeImage: {
    marginLeft: 58,
    width: 60,
    height: 80,
    resizeMode: "contain",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  progressBarContainer: {
    marginLeft: 68,
    width: "70%",
    height: 20,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#000",
    borderRadius: 30,
    flexDirection: "row",
    overflow: "hidden",
  },
  level: {
    flex: 1,
    height: "100%",
    marginRight: 1.5,
  },
  activeLevel: {
    backgroundColor: "#F9D866",
    position: "relative",
  },
  inactiveLevel: {
    backgroundColor: "#F7CF47",
    position: "relative",
  },
  levelText: {
    fontSize: 14,
    marginTop: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
  wrapContainer: {
    marginTop: 60,

    marginBottom: 10,
    marginLeft: 5,
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    gap: -5,
    //gap: 5,
  },
  boxRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    paddingVertical: 30,
    //borderWidth: 1,
    borderColor: "#000",
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#F7CF47",
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  },
  boxText: {
    flexDirection: "column",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
  },

  containerWrapper: {
    //flex: 1,
    backgroundColor: "#F7CF47",
    margin: 10,
    gap: 15,
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
  // container: {
  //   padding: 10,
  // },
});

export default HomeScreen;
