import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {blue, red} from './Constants';
import Field from './Field';

const Register = props => {
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
            color: 'red',
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
            keyboardType={'email-address'}
          />
          
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16
            }}>
            <Text style={{color: 'grey', fontSize: 16, alignItems:'center'}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color: red, fontWeight: 'bold', fontSize: 16}}>
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
            <Text style={{color: 'grey', fontSize: 16}}>
              and {" "}
            </Text>
            <Text style={{color: red, fontWeight: 'bold', fontSize: 16}}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={blue}
            btnLabel="Register"
            Press={() => {
              alert('Account created');
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
