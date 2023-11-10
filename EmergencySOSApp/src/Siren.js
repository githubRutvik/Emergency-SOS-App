import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import Sound from 'react-native-sound';

const SirenON = (
  <Image
    style={{ height: 200, width: 200, alignSelf: 'center', justifyContent: 'center' }}
    source={require('./assets/SirenON.png')}
  />
);

const SirenOFF = (
  <Image
    style={{ height: 200, width: 200, alignSelf: 'center', justifyContent: 'center' }}
    source={require('./assets/SirenOFF.png')}
  />
);

const Siren = () => {
  const [isSirenOn, setIsSirenOn] = useState(false);
  const [sound, setSound] = useState(null);

  const playSound = () => {
    if (sound) {
      // Release the previously loaded sound
      sound.release();
    }

    const sirenSound = new Sound('siren.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }

      // Set the number of loops to infinity
      sirenSound.setNumberOfLoops(-1);

      // Play the sound
      sirenSound.play();

      // Save the sound object in the state
      setSound(sirenSound);
    });
  };

  const stopSound = () => {
    if (sound) {
      sound.stop(() => {
        // Release the sound
        sound.release();
        setIsSirenOn(false);
      });
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={isSirenOn ? stopSound : playSound}>
        {isSirenOn ? SirenON : SirenOFF}
      </TouchableOpacity>
      <Text style={{ color: '#000000', marginBottom: 50, fontSize: 20, fontWeight: 'bold' }}>Siren</Text>
    </View>
  );
};

export default Siren;
