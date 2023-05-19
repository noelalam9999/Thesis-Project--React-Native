import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.successText}>Payment Successful</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Order Status");
        }}
      >
        <Text style={styles.buttonText}>See order status</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7CF47",
  },
  successText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F7CF47",
  },
});

export default SuccessScreen;
