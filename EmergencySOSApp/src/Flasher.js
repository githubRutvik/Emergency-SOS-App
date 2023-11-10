import React from 'react';
import { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { red, white } from './Constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Image } from 'react-native';
import Torch from 'react-native-torch';

const FlashON = <Image
  style={{ height: 200, width: 200, alignSelf: 'center', justifyContent: 'center' }}
  source={require('./assets/FlashON.png')}
/>

const FlashOFF = <Image
  style={{ height: 200, width: 200, alignSelf: 'center', justifyContent: 'center' }}
  source={require('./assets/FlashOFF.png')}
/>

const Flasher = () => {
  //Default Keep Awake off
  const [isTorchOn, setIsTorchOn] = useState(false);

  const handlePress = async () => {
    const cameraAllowed = await Torch.requestCameraPermission(
      'Camera Permissions', // dialog title
      'We require camera permissions to use the torch on the back of your phone.' // dialog body
    );

    if (cameraAllowed) {
      Torch.switchState(!isTorchOn);
      setIsTorchOn(!isTorchOn);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={handlePress} style={{ alignItems: 'center', justifyContent: 'center'}}>
        {isTorchOn ? FlashON : FlashOFF}
      </TouchableOpacity>
      <Text style={{ color: '#000000', marginBottom: 50, fontSize: 20, fontWeight: 'bold' }}>Flasher</Text>
    </View>
  );
}



export default Flasher;