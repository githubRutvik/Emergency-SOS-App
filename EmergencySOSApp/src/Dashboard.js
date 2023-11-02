
import * as React from 'react';
import { View, Text, } from 'react-native';
import { red, white } from './Constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Image} from 'react-native';


function Dashboard() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ color: 'red', fontSize: 64,  marginTop: 30, marginBottom: 30, fontWeight: 'bold' }}>Welcome</Text>
      <Image
        style={{height:250, width:150, alignSelf:'center'}}
        source={require('./assets/Contacts.png')}
      />
      <Image
        style={{height:250, width:150, alignSelf:'center'}}
        source={require('./assets/Flash.png')}
      />
      <Image
        style={{height:200, width:170, alignSelf:'center'}}
        source={require('./assets/Instructions.png')}
      />
    </View>
  );
}



export default Dashboard;