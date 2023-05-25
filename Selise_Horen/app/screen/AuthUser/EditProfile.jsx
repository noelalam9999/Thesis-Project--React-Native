import { useFocusEffect } from "@react-navigation/core";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../../config";

<<<<<<< HEAD
const EditProfile=()=>{
=======
const EditProfile = () => {
>>>>>>> df21664dd5351e409c0835c01309704eaf5a94e9
  const [userInfo, setuserInfo] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchUser = async () => {
        try {
          const token = await AsyncStorage.getItem("token");
          const response = await fetch(`${config.USER_URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const userData = await response.json();
          setuserInfo(userData);
        } catch (error) {
          console.log(error);
        }
      };
<<<<<<< HEAD
      fetchUser();
    }, [])
=======
      fetchUser;
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <Text style={styles.label}>{userInfo.name}</Text>
      <Text style={styles.label}>Email</Text>
      <Text style={styles.label}>Phone</Text>
      <Text style={styles.label}>Shipping Address</Text>
    </View>
>>>>>>> df21664dd5351e409c0835c01309704eaf5a94e9
  );

  return(
    <View style={styles.container}>
    <Text style={styles.title}>Edit Profile</Text>
    <Text style={styles.label}>{userInfo.name}</Text>
    <Text style={styles.label}>Email</Text>
    <Text style={styles.label}>Phone</Text>
    <Text style={styles.label}>Shipping Address</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F7CF47",
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