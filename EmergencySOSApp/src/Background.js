import React, { Children } from "react";
import {View, ImageBackground} from 'react-native';

const Background = ({children}) => {
    return(
        <View>
            
            <View style={{ position: 'absolute', backgroundColor:'white'}}>
                {children}
            </View>
        </View>
    );
}



export default Background;