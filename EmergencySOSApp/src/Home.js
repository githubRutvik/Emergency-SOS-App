import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { blue, white } from './Constants';

const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
      <Text style={{ color: 'white', fontSize: 64, marginBottom: 40 }}>EmergencySOS</Text>
      <Text style={{ color: 'white', fontSize: 64, marginBottom: 40 }}>Let's start</Text>
      <Btn bgColor={white} textColor={blue} btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      <Btn bgColor='white' textColor={blue} btnLabel="Register" Press={() => props.navigation.navigate("Register")} />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({})

export default Home;
