import React from 'react';
import { View, Text, Touchable, } from 'react-native';
import { red, white } from './Constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Image } from 'react-native';
import Sound from 'react-native-sound'


function Siren() {

  const playSound = () => {
    var sound = new Sound('siren.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());

      // Play the sound with an onEnd callback
      sound.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        style={{ padding:20, borderWidth:5, backgroundColor:'orange'
        }}>
        Play</Text>
    </View >
  );
}



export default Siren;