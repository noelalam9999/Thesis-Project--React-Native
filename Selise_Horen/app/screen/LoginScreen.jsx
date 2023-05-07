import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>LOGO</Text>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Username"></TextInput>
        <TextInput style={styles.input} placeholder="Email"></TextInput>

        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: "white" }}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F9C900",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "80%",
  },
  input: {
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,

    borderBottomWidth: 0.5,
    borderBottomColor: "black",
  },
  btn: {
    borderRadius: 200,
    width: 100,

    padding: 10,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "black",
  },
});

export default LoginScreen;
