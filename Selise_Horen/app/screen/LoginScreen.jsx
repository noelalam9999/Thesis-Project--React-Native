import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  function showRegister() {
    navigation.navigate('SignUp');
    console.log(navigation);
  }
  return (
    <View style={styles.screen}>
      <Text>LOGO</Text>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Username"></TextInput>
        <TextInput style={styles.input} placeholder="Email"></TextInput>

        <View style={styles.center}>
          <TouchableOpacity style={styles.btn}>
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
