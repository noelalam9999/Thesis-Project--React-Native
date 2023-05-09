import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({});
  const [confPass, setConfPass] = useState('');

  function updateInfo(info) {
    setUserInfo((old) => {
      return { ...old, ...info };
    });
  }

  function signup() {
    if (userInfo.password && confPass === userInfo.password) {
      console.log(userInfo);
    } else {
      console.log('Did not match');
    }
  }

  function goBack() {
    navigation.goBack();
  }
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
          onChangeText={(text) => {
            updateInfo({ name: text });
          }}></TextInput>
        <TextInput
          keyboardType="email-address"
          autoComplete="email"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666666"
          onChangeText={(text) => {
            updateInfo({ email: text });
          }}></TextInput>
        <TextInput
          keyboardType="phone-pad"
          autoComplete="tel"
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#666666"
          onChangeText={(text) => {
            updateInfo({ phone: text });
          }}></TextInput>
        <TextInput
          autoCapitalize="none"
          autoComplete="street-address"
          autoCorrect={false}
          style={styles.input}
          placeholder="Address"
          placeholderTextColor="#666666"
          onChangeText={(text) => {
            updateInfo({ address: text });
          }}></TextInput>
        <TextInput
          secureTextEntry={true}
          autoCapitalize="none"
          autoComplete="password-new"
          autoCorrect={false}
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666666"
          onChangeText={(text) => {
            updateInfo({ password: text });
          }}></TextInput>
        <TextInput
          secureTextEntry={true}
          autoCapitalize="none"
          autoComplete="password-new"
          autoCorrect={false}
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#666666"
          onChangeText={(text) => setConfPass(text)}></TextInput>

        <TouchableOpacity style={styles.btn} onPress={signup}>
          <Text style={{ color: 'white' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <Text style={styles.loginLink} onPress={goBack}>
          Log in
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F7CF47',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
  form: {
    width: '80%',
  },
  input: {
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,

    borderBottomWidth: 0.5,
    borderBottomColor: '#000000',
  },
  btn: {
    borderRadius: 200,
    width: 100,

    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#000000',
  },

  loginContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  loginText: {
    color: 'black',
    marginRight: 5,
  },
  loginLink: {
    color: 'black',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
export default SignupScreen;
