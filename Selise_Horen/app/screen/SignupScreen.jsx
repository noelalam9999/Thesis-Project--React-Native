import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import AuthService from "../services/Auth.service";
import { set } from "react-native-reanimated";
import LoginScreen from "./LoginScreen";

const SignupScreen = ({ navigation, route }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggedIn } = route.params;

  const [image, setImage] = useState("");
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const handleSubmit = async () => {
    try {
      const userInfo = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        password: password,
        profilePic: imageurl,
      };
      const response = await AuthService.register(userInfo);
      if (response) {
        console.log("signup successful");
        isLoggedIn(true);
      }
    } catch (error) {
      console.log("could not sign up");
    }
  };

  return (
    <View style={styles.screen}>
      <Text>LOGO</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoComplete="name"
          autoCapitalize="words"
          autoCorrect={false}
          placeholderTextColor="#666666"
          value={name}
          onChangeText={setName}
        ></TextInput>
        <TextInput
          keyboardType="email-address"
          autoComplete="email"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666666"
          value={email}
          onChangeText={setEmail}
        ></TextInput>
        <TextInput
          keyboardType="phone-pad"
          autoComplete="tel"
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#666666"
          value={phone}
          onChangeText={setPhone}
        ></TextInput>
        <TextInput
          autoCapitalize="none"
          autoComplete="street-address"
          autoCorrect={false}
          style={styles.input}
          placeholder="Address"
          placeholderTextColor="#666666"
          value={address}
          onChangeText={setAddress}
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          autoCapitalize="none"
          autoComplete="password-new"
          autoCorrect={false}
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666666"
          value={password}
          onChangeText={setPassword}
        ></TextInput>
        {/* <TextInput
          secureTextEntry={true}
          autoCapitalize="none"
          autoComplete="password-new"
          autoCorrect={false}
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#666666"
          onChangeText={(text) => setConfPass(text)}
        ></TextInput> */}
        {/* Add Input image field */}
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText} value={image} onChangeText={setImage}>
            Select image
          </Text>
        </TouchableOpacity>

        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
        {/* finish  */}
        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text style={{ color: "white" }}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton}>
          <View style={styles.googleButtonIcon}>
            <Icon name="google" size={20} color="white" />
          </View>
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate("Login")}
        >
          Log in
        </Text>
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
  titleContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
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
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#000000",
  },

  loginContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  loginText: {
    color: "black",
    marginRight: 5,
  },
  loginLink: {
    color: "black",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
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
export default SignupScreen;
