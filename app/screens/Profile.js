import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Profile = () => {

    const [fullName, setFullName] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.profilePics}></View>
                <View>
                    <TextInput
                        editable={true}
                        placeholder={'Full Name'}
                        style={{ width: 250, height: 40, borderColor: 'gray', borderWidth: 1 }}
                        defaultValue={fullName}
                    />
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text style={{color: 'white', textAlign: 'center'}}>Save</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', width: 400, height: 50, backgroundColor: 'white', marginTop: 10, alignItems: 'center'}}>
                    <Text style={styles.countView}>0 Following</Text>
                    <Text style={styles.countView}>0 Posts</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    profilePics: {
        width: 120,
        height: 120,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 60,
        margin: 20,
    },
    TextInput: {
        width: 250,
        height: 50,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
    button: {
        width: 250, 
        backgroundColor: '#808080', 
        paddingVertical: 10, 
        paddingHorizontal: 20, 
        borderRadius: 5,
        marginVertical: 10,
        backgroundColor: '#08457e'
    },
    countView: {
        marginHorizontal: 50, 
        padding: 15,
        fontWeight: 'bold'
    }
})

export default Profile;