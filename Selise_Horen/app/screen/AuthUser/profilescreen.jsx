import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
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
              <Text style={styles.label}>Registered </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <View>
              <Text style={styles.number}>5</Text>
              <Text style={styles.label}>Active</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <View>
              <Text style={styles.number}>54</Text>
              <Text style={styles.label}>Today's horn</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoText}>your@email.com</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Address:</Text>
          <Text style={styles.infoText}>104,Project Code</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Phone:</Text>
          <Text style={styles.infoText}>01323249</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.logoutButton}>
        <View style={styles.logoutContainer}>
          <MaterialIcons name="logout" size={24} color={"#F7CF47"} />
        </View>
      </TouchableOpacity>
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
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  logoutButton: {
    marginTop: 50,
    alignSelf: "center",
    padding: 10,
    backgroundColor: "#000000",
    borderRadius: 5,
    elevation: 2,
  },

  logoutContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ProfileScreen;
