import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EditProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <Text style={styles.label}>Name</Text>
      <Text style={styles.label}>Email</Text>
      <Text style={styles.label}>Phone</Text>
      <Text style={styles.label}>Shipping Address</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
});
export default EditProfile;
