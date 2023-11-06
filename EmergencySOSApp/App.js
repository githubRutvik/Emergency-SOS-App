

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Register from './src/Register';
import Login from './src/Login';
import Dashboard from './src/Dashboard';
import Contacts from './src/Contacts';
import Flasher from './src/Flasher';
import Siren from './src/Siren';
import Instructions from './src/Instructions ';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}> 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Flasher" component={Flasher} />
        <Stack.Screen name="Siren" component={Siren} />
        <Stack.Screen name="Instructions" component={Instructions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;