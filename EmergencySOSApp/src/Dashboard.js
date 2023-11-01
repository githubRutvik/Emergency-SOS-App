
import * as React from 'react';
import { View, Text, } from 'react-native';
import { red, white } from './Constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';


function Dashboard() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ color: 'red', fontSize: 64,  marginTop: 20 }}>Welcome</Text>
    </View>
  );
}



export default Dashboard;