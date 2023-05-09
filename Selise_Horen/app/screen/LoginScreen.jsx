import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passField = useRef();

  function showRegister() {
    navigation.navigate('SignUp');
  }

  async function login() {
    try {
      await AsyncStorage.setItem('token', 'newToken');
    } catch (error) {
      console.log(error);
    }
  }
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
          onChangeText={(text) => {
            setEmail(text);
          }}
          blurOnSubmit={false}
          onSubmitEditing={() => passField.current.focus()}></TextInput>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
          secureTextEntry={true}
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666666"
          onChangeText={(text) => {
            setPassword(text);
          }}
          ref={passField}
          onSubmitEditing={login}></TextInput>

        <View style={styles.center}>
          <TouchableOpacity style={styles.btn} onPress={login}>
            <Text style={{ color: 'white' }}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={showRegister}>
            <Text style={{ color: 'white' }}>Register</Text>
          </TouchableOpacity>
        </View>
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
  center: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
