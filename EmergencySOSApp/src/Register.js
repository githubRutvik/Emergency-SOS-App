import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {blue, red} from './Constants';
import Field from './Field';
import auth from '@react-native-firebase/auth';
import { useState } from 'react'





const Register = props => {

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createUser = () => {
      console.log(email, password)
      auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
              console.log('User account created!');
          })
          .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                  console.log('That email address is already in use!');
              }
    
              if (error.code === 'auth/invalid-email') {
                  console.log('That email address is invalid!');
              }
    
              console.error(error);
          });
    }
    
  return (
    
      <View style={{ alignItems:'center',  width: 450, height: 1000, backgroundColor:'white'}}>
        <Text
          style={{
            color: 'red',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 100,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: '#000000',
            fontSize: 19,
            fontWeight: 'bold',
            marginTop: 15,
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        
          <Field placeholder="First Name" />
          
          <Field
            placeholder="Email / Username"
            // keyboardType={'email-address'}
            value={email}
                onChangeText={txt => setEmail(txt)}
          />
          
          <Field placeholder="Password" secureTextEntry={true} 
          value={password}
          onChangeText={txt => setPassword(txt)}/>
          {/* <Field placeholder="Confirm Password" secureTextEntry={true} /> */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16
            }}>
            <Text style={{color: 'grey', fontSize: 16, alignItems:'center', marginTop:25}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color: red, fontWeight: 'bold', fontSize: 16, marginTop:25}}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{color: 'grey', fontSize: 16, marginTop:10}}>
              and {" "}
            </Text>
            <Text style={{color: red, fontWeight: 'bold', fontSize: 16, marginTop:10}}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={blue}
            btnLabel="Register"
            Press={() => {
            
                createUser();
            
              props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000000'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: red, fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      
  );
};

export default Register;
