
import React from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import { red, white } from './Constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Image } from 'react-native';
import Btn from './Btn';


function Dashboard(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ color: 'red', fontSize: 64, marginTop: 30, marginBottom: 30, fontWeight: 'bold' }}>Welcome</Text>

      <TouchableHighlight onPress={() => props.navigation.navigate('Contacts')}>
        <Image
          style={{ height: 120, width: 120, alignSelf: 'center' }}
          source={require('./assets/ContactsLogo.png')}
        />
      </TouchableHighlight>
      <Text style={{ color: '#000000', marginBottom: 50, fontSize: 20, fontWeight: 'bold' }}>Contacts</Text>
      

      <TouchableHighlight onPress={() => props.navigation.navigate('Flasher')}>
        <Image
          style={{ height: 120, width: 120, alignSelf: 'center' }}
          source={require('./assets/FlasherLogo.png')}
        />
      </TouchableHighlight>
      <Text style={{ color: '#000000', marginBottom: 50, fontSize: 20, fontWeight: 'bold' }}>Flasher</Text>

      <TouchableHighlight onPress={() => props.navigation.navigate('Siren')}>
        <Image
          style={{ height: 120, width: 120, alignSelf: 'center' }}
          source={require('./assets/SirenLogo.png')}
        />
      </TouchableHighlight>
      <Text style={{ color: '#000000', marginBottom: 50, fontSize: 20, fontWeight: 'bold' }}>Siren</Text>

      <TouchableHighlight onPress={() => props.navigation.navigate('Instructions')}>
        <Image
          style={{ height: 120, width: 120, alignSelf: 'center' }}
          source={require('./assets/InstructionLogo.png')}
        />
      </TouchableHighlight>

      <Text style={{ color: '#000000', marginBottom: 50, fontSize: 20, fontWeight: 'bold' }}>Instructions</Text>
    </View>
  );
}



export default Dashboard;