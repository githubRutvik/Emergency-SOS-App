
import React, { useState } from 'react';
import { View, Text, Touchable, Image, FlatList, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { red, white } from './Constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { selectContactPhone } from 'react-native-select-contact';

const Contacts = () => {
  const [selectedContacts, setSelectedContacts] = useState([]);

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

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <View style={{ marginTop: 20 }}>
        <Text>Contacts</Text>
        <FlatList
          data={selectedContacts}
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
              <Text>{item.phone}</Text>
            </View>
          )}
          contentContainerStyle={{ backgroundColor: 'red' }}
        />
      </View>

      {selectedContacts.length <= 5 && (
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

