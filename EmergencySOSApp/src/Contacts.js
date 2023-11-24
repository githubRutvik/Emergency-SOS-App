
import React, { useState, useEffect } from 'react';
import { View, Text, Touchable, Image, FlatList, TouchableOpacity, PermissionsAndroid, Button } from 'react-native';
import { red, white } from './Constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { selectContactPhone } from 'react-native-select-contact';
import SendSMS, { send } from 'react-native-sms';
import Geolocation, { getCurrentPosition } from '@react-native-community/geolocation';

const Contacts = () => {
  const [selectedContacts, setSelectedContacts] = useState([]);
  // const [mobileNumber, setMobileNumber] = useState('9999999999');
  // const [bodySMS, setBodySMS] = useState('Please follow https://aboutreact.com');

  const mobileNumber = '9518765805'; // Replace with the recipient's phone number
  const bodySMS = `Emergency! I need help! My current location is: "https://maps.google.com/?q=${currentLatitude},${currentLongitude}";`;



  const [
    currentLongitude,
    setCurrentLongitude
  ] = useState('...');
  const [
    currentLatitude,
    setCurrentLatitude
  ] = useState('...');
  const [
    locationStatus,
    setLocationStatus
  ] = useState('');

  useEffect(() => {
    const requestLocationPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
 
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = 
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);
        
        //Setting Longitude state
        setCurrentLatitude(currentLatitude);

       
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        //Will give you the location on location change
        
        setLocationStatus('You are Here');
        console.log(position);

        //getting the Longitude from the location json        
        const currentLongitude =
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Latitude state
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000
      },
    );
  };

  const selectContacts = async () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    }).then(() => {
      selectContactPhone()
        .then(selection => {
          if (!selection) {
            return null;
          }

          let { contact, selectedPhone } = selection;
          console.log(`Selected ${selectedPhone.type} phone number ${selectedPhone.number} from ${contact.name}`);

          setSelectedContacts(_contacts => [..._contacts, { name: contact.name, phone: selectedPhone.number }]);

          return selectedPhone.number;
        });
    })
  };



    SendSMS.send(
      {
        // Message body
        body: bodySMS,
        // Recipients Number
        recipients: [mobileNumber],
        // An array of types 
        // "completed" response when using android
        successTypes: ['sent', 'queued'],
      },
      (completed, cancelled, error) => {
        if (completed) {
          console.log('SMS Sent Completed');
        } else if (cancelled) {
          console.log('SMS Sent Cancelled');
        } else if (error) {
          console.log('Some error occured');
        }
      },
    );


  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>

      <View>
        <Text style={{ marginTop: 50, fontWeight: "bold", color:'#000000', fontSize:30 }}>Contacts</Text>
        <FlatList
          data={selectedContacts}
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={({ item }) => (
            <View style={{ width: 300, alignItems:'center', borderRadius: 50 }}>
              <Text style={{ marginTop: 20, fontSize:20, fontWeight: "bold", color:'#000000'}}>{item.name}</Text>
              <Text style={{ marginTop: 5, fontSize:15, fontWeight: "bold"}}>{item.phone}</Text>
            </View>
          )}
          contentContainerStyle={{ backgroundColor: 'red' }}
        />
      </View>

      <View >
        <Button style={{marginTop:10, flex:1, backgroundColor: 'blue'}}
          title="Locate"
          onPress={getCurrentPosition}
        />
      </View>
      <View >
        <Button style={{marginTop:10, flex:1, backgroundColor: 'blue'}}
          title="Send SMS"
          onPress={send}
        />
      </View>

      {selectedContacts.length <= 4 && (
        <TouchableOpacity onPress={selectContacts}>
          <Image
            style={{ height: 60, width: 60, marginBottom: 150, marginLeft: 250, alignItems: 'center' }}
            source={require('./assets/add.png')} />
        </TouchableOpacity>
      )}
    </View>
  );

};

export default Contacts;

