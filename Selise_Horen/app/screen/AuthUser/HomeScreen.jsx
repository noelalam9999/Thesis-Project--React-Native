import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

const chartData1 = [
  { x: 1, y: 50 },
  { x: 5, y: 60 },
  { x: 10, y: 70 },
  { x: 15, y: 80 },
  { x: 20, y: 90 },
  { x: 25, y: 100 },
];
const countries = [
  "Device Change",
  "Toyota Camry",
  "Honda Civic",
  "Ford Mustang",
  "Chevrolet Corvette",
  "BMW M3",
  "Audi A4",
];

const chartData3 = [];
for (let x = -30; x <= 30; x++) {
  const y = Math.exp(-(x * x) / 100);
  chartData3.push({ x, y });
}

const HomeScreen = () => {
  const [isYearView, setIsYearView] = useState(true);
  const [isMonthView, setIsMonthView] = useState(false);

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
  return (
    <View style={styles.background}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontWeight: "bold" }}>
          Number of Horns played per day
        </Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={[styles.button]} onPress={handlePress}>
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
          data={countries}
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

      <LineChart
        data={{
          labels: chartData1.map((dataPoint) => dataPoint.x),
          datasets: [
            {
              data: chartData1.map((dataPoint) => dataPoint.y),
            },
          ],
        }}
        width={Dimensions.get("window").width}
        height={220}
        yAxisSuffix="%"
        yAxisInterval={1}
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
          marginLeft: 13,
          marginRight: 26,
        }}
      />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontWeight: "bold" }}>Global Ranking</Text>
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
          marginLeft: 13,
          marginRight: 26,
        }}
      />
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
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 39,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#000000",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 20,
    marginLeft: 30,
    marginRight: 40,
  },
  dropdownButton: {
    backgroundColor: "#000000",
    borderRadius: 30,
    // width: "45%",
    width: 160,
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
    fontWeight: "bold",
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
});

export default HomeScreen;
