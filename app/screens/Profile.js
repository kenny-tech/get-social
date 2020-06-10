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
        width: 150,
        height: 150,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 75,
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
    }
})

export default Profile;