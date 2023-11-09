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

function Siren() {
  const [isSirenOn, setIsSirenOn] = useState(false);
  const [sound, setSound] = useState(null);

  const playSound = () => {
    if (sound) {
      sound.release(); // Release the previously loaded sound
    }

    const sirenSound = new Sound('siren.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }

      // loaded successfully
      console.log('duration in seconds: ' + sirenSound.getDuration() + 'number of channels: ' + sirenSound.getNumberOfChannels());

      // Play the sound with an onEnd callback
      sirenSound.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });

      setSound(sirenSound); // Save the sound object in the state
    });

    setIsSirenOn(true);
  };

  const stopSound = () => {
    if (sound) {
      sound.stop(() => {
        sound.release(); // Release the sound
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
}

export default Siren;
