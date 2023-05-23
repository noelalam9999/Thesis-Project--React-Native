import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import AuthService from "../../services/Auth.service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import bronze from "../../../assets/image/bronze-medal.png";
import silver from "../../../assets/image/silver-medal.png";
import gold from "../../../assets/image/gold-medal.png";

const LinechartData = [
  { x: 1, y: 10 },
  { x: 2, y: 5 },
  { x: 3, y: 3 },
  { x: 4, y: 18 },
  { x: 5, y: 9 },
  { x: 6, y: 25 },
  { x: 7, y: 4 },
  { x: 8, y: 6 },
  { x: 9, y: 1 },
  { x: 10, y: 12 },
];

const ProfileScreen = ({ navigation, route }) => {
  const [accessToken, setAccessToken] = useState("");

  const { isLoggedIn } = route.params;

  useEffect(() => {
    retrieveAccessToken();
  }, []);

  const retrieveAccessToken = async () => {
    try {
      const token = await AsyncStorage.getItem("accessToken");
      if (token) {
        setAccessToken(token);
      }
    } catch (error) {
      console.log("Error retrieving access token:", error);
    }
  };

  const handleLogout = async () => {
    await AuthService.logout("token");
    isLoggedIn(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatar}>EK</Text>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Ershad Khan</Text>
            <Text style={styles.infoText}> Individual account</Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <View>
                <Text style={styles.number}>10</Text>
                <Text style={styles.label}>Devices </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <View>
                <Text style={styles.number}>5</Text>
                <Text style={styles.label}>Ordered</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View>
                <Text style={styles.number}>3</Text>
                <Text style={styles.label}>Active</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 40,
              marginLeft: 60,
            }}
          >
            <Text style={{ fontSize: 15, marginLeft: 27 }}>
              Number of Badge Collections
            </Text>
          </View>
          <LineChart
            data={{
              labels: LinechartData.map((dataPoint) => dataPoint.x.toString()),
              datasets: [
                { data: LinechartData.map((dataPoint) => dataPoint.y) },
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
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
              marginTop: 20,
              marginLeft: -20,
              marginRight: 10,
            }}
            renderDotContent={({ x, y, index }) => {
              if (index === 8) {
                return (
                  <View
                    style={{
                      position: "absolute",
                      top: y - 20,
                      left: x - 15,
                      width: 25,
                      height: 25,
                    }}
                  >
                    <Image
                      source={bronze}
                      style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "contain",
                      }}
                    />
                  </View>
                );
              } else if (index === 3) {
                return (
                  <View
                    style={{
                      position: "absolute",
                      top: y - 15,
                      left: x - 10,
                      width: 25,
                      height: 25,
                    }}
                  >
                    <Image
                      source={silver}
                      style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "contain",
                      }}
                    />
                  </View>
                );
              } else if (index === 5) {
                return (
                  <View
                    style={{
                      position: "absolute",
                      top: y - 15,
                      left: x - 10,
                      width: 25,
                      height: 25,
                    }}
                  >
                    <Image
                      source={gold}
                      style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "contain",
                      }}
                    />
                  </View>
                );
              }
              return null;
            }}
          />
        </View>

        <View style={styles.bottomButton}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <MaterialIcons name="edit" size={24} color="#000" />
            <Text style={{ color: "#000" }}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.editButton} onPress={handleLogout}>
            <MaterialIcons name="logout" size={24} color="#000" />
            <Text style={{ color: "#000" }}>Signout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7CF47",
    padding: 8,
  },
  body: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    marginTop: 20,
  },
  avatarContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 0.16,
  },
  avatar: {
    fontSize: 72,
    fontWeight: "700",
  },
  nameContainer: {
    marginTop: 24,
    alignItems: "center",
  },
  name: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "600",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 12,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  infoText: {
    color: "#000000",
    fontSize: 16,
  },
  number: {
    color: "#F7CF47",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  label: {
    color: "#F7CF47",
    textAlign: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 20,
    gap: 5,
  },
  buttonsContainer: {
    marginBottom: 20,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    width: "30%",
    backgroundColor: "#000000",
    borderRadius: 30,
    paddingVertical: 2,
    paddingHorizontal: 2,
    marginHorizontal: 2,
  },
  bottomButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginTop: 120,
    marginBottom: 80,
  },
  editButton: {
    flexDirection: "row",
    backgroundColor: "#F7CF47",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#F7CF47",
    marginLeft: 5,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 7,
  },
});

export default ProfileScreen;
