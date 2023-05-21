import React, { useRef, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthService from "../services/Auth.service";

const LoginScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function showRegister() {
    navigation.navigate("SignUp");
  }
  const { isLoggedIn } = route.params;

  const handleSubmit = async () => {
    try {
      const user = { email: email, password: password };
      const response = await AuthService.login(user);
      //console.log("baal", response);
      if (response) {
        console.log(response);
        await AsyncStorage.setItem("token", response.accessToken);
        await AsyncStorage.setItem("userId", response.id);
        //console.log("login successful");
        isLoggedIn(true);
      } else {
        console.log("Email or password is incorrect");
      }
    } catch (error) {
      console.log("Error occurred during login:", error);
    }
  };
  return (
    <View style={styles.screen}>
      <Text>LOGO</Text>
      <View style={styles.form}>
        <TextInput
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          returnKeyType="next"
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666666"
          value={email}
          onChangeText={setEmail}
        ></TextInput>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
          secureTextEntry={true}
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666666"
          value={password}
          onChangeText={setPassword}
        ></TextInput>

        <View style={styles.center}>
          <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
            <Text style={{ color: "white" }}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={showRegister}>
            <Text style={{ color: "white" }}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton}>
            <View style={styles.googleButtonIcon}>
              <Icon name="google" size={20} color="white" />
            </View>
            <Text style={styles.googleButtonText}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F7CF47",
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
    borderBottomColor: "#000000",
  },
  btn: {
    borderRadius: 200,
    width: 100,

    padding: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#000000",
  },
  center: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  googleButtonIcon: {
    marginRight: 8,
  },
  googleButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
