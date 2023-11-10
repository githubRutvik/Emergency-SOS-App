
import React, { useState } from 'react';
import { View, Text, Touchable, Image, FlatList, TouchableOpacity,PermissionsAndroid } from 'react-native';
import { red, white } from './Constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SelectContact from 'react-native-select-contact';

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
  title: 'Contacts',
  message: 'This app would like to view your contacts.',
  buttonPositive: 'Please accept bare mortal',
})
  .then((res) => {
      console.log('Permission: ', res);
      Contacts.getAll()
          .then((Contacts) => {
              // work with contacts
              console.log(contacts);
          })
          .catch((e) => {
              console.log(e);
          });
  })
  .catch((error) => {
      console.error('Permission error: ', error);
  });

const Contacts = () => {
  const [selectedContacts, setSelectedContacts] = useState([]);

  const selectContacts = async () => {
    try {
      const result = await SelectContact.pickContact({
        multiple: true,
        numberOfSelect: 5,
        selectedContacts,
      });

      if (result) {
        setSelectedContacts(result);
      }
    } catch (error) {
      console.error('Error selecting contacts:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <View style={{ marginTop: 20 }}>
        <Text>Contacts</Text>
        <FlatList
          data={selectedContacts}
          keyExtractor={(item) => item.recordID}
          renderItem={({ item }) => (
            <View>
              <Text>{item.displayName}</Text>
              <Text>{item.phoneNumbers[0]?.number}</Text>
            </View>
          )}
        />
      </View>
      <TouchableOpacity onPress={selectContacts}>
        <Image
          style={{ height: 60, width: 60, marginBottom: 150,marginLeft:250 , alignItems: 'center' }}
          source={require('./assets/add.png')} />


      </TouchableOpacity>
    </View>
  );
};

export default Contacts;

