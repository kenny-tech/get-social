import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const Profile = () => {

    return (
        <View style={styles.container}>
            <View style={styles.profilePics}></View>
                <View>
                    <Text style={styles.profileName}>Ben Johnson</Text>
                </View>
                <View style={{flexDirection:'row', width: 400, height: 50, backgroundColor: 'white', marginTop: 20, alignItems: 'center'}}>
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
    },
    profileName: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default Profile;