import React from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { blue, red } from './Constants';
import Field from './Field';
import auth from '@react-native-firebase/auth';
import { useState } from 'react'

const Login = (props) => {



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // console.log(email)
  // console.log(password)

  const userLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert("User Logged In");
      })
      .catch(error => {
        console.log(error);
      });

  }
  return (
    <View style={{ flex: 1, alignItems: 'center', width: '100%', marginHorizontal: 'auto' }}>
      <Text
        style={{
          color: 'red',
          fontSize: 64,
          fontWeight: 'bold',
          marginTop: 100,
        }}>
        Login
      </Text>

      <Text style={{ fontSize: 30, color: red, fontWeight: 'bold', marginTop: 20 }}>
        Welcome Back
      </Text>
      <Text
        style={{
          color: 'grey',
          fontSize: 19,
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
        Login to your account
      </Text>

      <Field style={{ flex: 1, marginBottom: 10, alignItems: 'center' }}
        placeholder="Email"
        value={email}
        onChangeText={txt => setEmail(txt)} />

      <Field placeholder="Password" secureTextEntry={true}
        value={password}
        onChangeText={txt => setPassword(txt)} />

      <View
        style={{ alignItems: 'center', width: '78%', paddingRight: 16, marginBottom: 200 }}>
        <Text style={{ color: red, fontWeight: 'bold', fontSize: 16 }}>
          Forgot Password ?
        </Text>
      </View>
      <Btn textColor='white' bgColor={blue} btnLabel="Login"
        Press={() => {
          userLogin();
          alert("Login Successful!")
          props.navigation.navigate("Dashboard")
        }} />
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: '#000000' }}>Don't have an account ? </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
          <Text style={{ color: red, fontWeight: 'bold', fontSize: 16 }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
