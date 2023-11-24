import React from 'react';
import { View, Text, Touchable, } from 'react-native';
import { red, white } from './Constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Image} from 'react-native';


function Instructions() {
  return (
    <View >
      <View style={{backgroundColor: '#000000', elevation: 5}}>
      <Text style={{ color: 'white', fontSize: 50, marginBottom: 40, marginTop: 30, fontWeight: 'bold', alignSelf:"center"}}>Instructions</Text>
      </View>
      <Text style={{ color: '#000000', fontSize: 25, marginBottom: 5, padding: 20 }}>
  1) <Text style={{ fontWeight: 'bold', color: '#228300' }}>Add the required contacts</Text> to which you want to send the alert.
</Text>
      <Text style={{ color: '#000000', fontSize: 25, marginBottom: 5, padding:20 }}>2) The alert message will include your current <Text style={{ fontWeight: 'bold', color: '#0075FF' }}> location.</Text> </Text>
      <Text style={{ color: '#000000', fontSize: 25, marginBottom: 5, padding:20 }}>3) Press the <Text style={{ fontWeight: 'bold', color: '#FF0000' }}>  Power Button 3 times </Text> to send the alert.</Text>
      <Text style={{ color: '#000000', fontSize: 25, marginBottom: 5, padding:20 }}>4) <Text style={{ fontWeight: 'bold', color: '#AD00FF' }}>Flash </Text>functionality is also present in app.</Text>
    </View>
  );
}



export default Instructions;