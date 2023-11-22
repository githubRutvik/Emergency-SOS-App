import React from 'react';
import {View, StyleSheet, Text, Alert, Button} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { red, white } from './Constants';
import { Image} from 'react-native';



const Home = (props) => {
  return (
    
      <View style={{ flex: 1, marginHorizontal: 40, marginVertical: 100, alignItems:'center' }}>
        <Image
        style={{height:100, width:100, alignSelf:'center'}}
        source={require('./assets/Logo.png')}
      />
      
      <Text style={{ color: 'red', fontSize: 64, marginBottom: 40, marginTop: 30}}>EmergencySOS</Text>
      <Text style={{ color: 'red', fontSize: 64, marginBottom: 40 }}>Let's start</Text>
      <Btn bgColor={white} textColor={red} btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      <Btn bgColor='white' textColor={red} btnLabel="Register" Press={() => props.navigation.navigate("Register")} />
      </View>
      
    
  );
}

const styles = StyleSheet.create({})

export default Home;
