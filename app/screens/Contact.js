import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';

const Contact = () => {

    // const loadContacts = () => {
    //     PermissionsAndroid.request(
    //         PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    //         {
    //           'title': 'Contacts',
    //           'message': 'This app would like to view your contacts.',
    //           'buttonPositive': 'Please accept bare mortal'
    //         }
    //       ).then(() => {
    //         Contacts.getAll((err, contacts) => {
    //           if (err === 'denied'){
    //             console.log(err);
    //           } else {
    //             // contacts returned in Array
    //             console.log('My contacts: ',contacts);
    //           }
    //         })
    //     })
    // }

    // useEffect(() => {
    //     loadContacts()
    // }, []);    
    
    return (
        <View>
        </View>
    )
}

export default Contact;