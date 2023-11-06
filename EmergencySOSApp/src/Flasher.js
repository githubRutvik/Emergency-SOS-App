import React from 'react';
import { View, Text, Touchable, } from 'react-native';
import { red, white } from './Constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Image} from 'react-native';
import Torch from 'react-native-torch';


const Flasher = () => {
  //Default Keep Awake off
  const [isTorchOn, setIsTorchOn] = useState(false);

  const handlePress = () => {
    Torch.switchState(!isTorchOn);
    setIsTorchOn(!isTorchOn);
  };


function Flasher() {
  return (
    <View >
      <Image
          style={{ height: 120, width: 120, alignSelf: 'center' }}
          source={require('./assets/SirenOFF.png')}
        />
      

    </View>
  );
}
}



export default Flasher;