import axios from "axios";
import Backend from "../config";
import config from "../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthService = {};
AuthService.register = async (user) => {
  try {
    return fetch(`${config.USER_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log("hii", data);
        return data;
      });
  } catch (error) {
    console.log(error);
  }
};

AuthService.login = async (user) => {
  try {
    return fetch(`${config.USER_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  } catch (error) {
    console.log(error);
  }
};

AuthService.profile = async (accessToken) => {
  try {
    const response = await fetch(`${config.USER_URL}/profile`, {
      method: "GET",
      credentials: "include",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
AuthService.logout = async (acesssToken) => {
  try {
    console.log("here");
    await AsyncStorage.removeItem(acesssToken);
  } catch (err) {
    console.log(err);
  }
};

export default AuthService;
