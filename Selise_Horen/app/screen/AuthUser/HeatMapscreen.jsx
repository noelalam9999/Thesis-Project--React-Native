import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Marker, Heatmap } from "react-native-maps";
import Map from "../../../assets/Map.json";
import * as Animatable from "react-native-animatable";

const HeatMap = () => {
  const initialRegion = {
    latitude: 23.8103,
    longitude: 90.4125,
    latitudeDelta: 2.5,
    longitudeDelta: 2.5,
  };

  const heatmapData = [
    { latitude: 23.8103, longitude: 90.4125, weight: 1 },
    { latitude: 23.7904, longitude: 90.4074, weight: 2 },
    { latitude: 23.7985, longitude: 90.3581, weight: 3 },
    { latitude: 23.755, longitude: 90.3763, weight: 4 },
    { latitude: 23.7543, longitude: 90.3637, weight: 5 },
    { latitude: 23.7326, longitude: 90.3842, weight: 6 },
  ];
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Marker
          coordinate={{ latitude: 23.8103, longitude: 90.4125 }}
          title={"Dhaka, Bangladesh"}
          description={"The capital of Bangladesh"}
          pinColor={"blue"}
        />
        <Animatable.View
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={styles.heatmapContainer}
        >
          <Heatmap
            points={heatmapData}
            radius={20}
            gradient={{
              colors: ["#e60000", "#e60000"],
              startPoints: [0.1, 0.5],
              colorMapSize: 256,
            }}
          />
        </Animatable.View>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  heatmapContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HeatMap;
