
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
        style={{height:120, width:120, alignSelf:'center' }}
        source={require('./assets/ContactsLogo.png')}
      />
      <Text style={{color: '#000000', marginBottom:50, fontSize: 30, fontWeight: 'bold'}}>Contacts</Text>
      <Image
        style={{height:120, width:120, alignSelf:'center'}}
        source={require('./assets/FlasherLogo.png')}
      />
      <Text style={{color: '#000000', marginBottom:50, fontSize: 30, fontWeight: 'bold'}}>Flasher</Text>
      <Image
        style={{height:120, width:120, alignSelf:'center'}}
        source={require('./assets/InstructionLogo.png')}
      />
      <Text style={{color: '#000000', marginBottom:50, fontSize: 30, fontWeight: 'bold'}}>Instruction</Text>
    </View>
  );
}



export default Dashboard;