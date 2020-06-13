import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import style from '../styles/style';

const Profile = () => {

    return (
        <View style={style.container}>
            <View style={style.headerView}>
                <View style={style.headerViewMargin}>
                    <Text style={style.headerText}>Profile</Text>
                </View>
                <View style={style.headerViewMargin}>
                    <TouchableOpacity onPress={() => Alert.alert("Add Contact", "Adding contacts...")}>
                        <Text style={style.headerTextRight}>Add Contact</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
                <View style={styles.profilePics}></View>
                <View>
                    <Text style={styles.profileName}>Ben Johnson</Text>
                </View>
                <View style={{marginVertical: 20}}>
                    <TouchableOpacity
                        style={style.button}
                        onPress={() => {Alert.alert("Update Profile", "You are currently editing your profile...")}}
                    >
                        <Text style={{color: 'white', textAlign: 'center'}}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', width: 400, height: 50, backgroundColor: 'white', marginTop: 20, alignItems: 'center'}}>
                    <Text style={styles.countView}>0 Following</Text>
                    <Text style={styles.countView}>0 Posts</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilePics: {
        width: 120,
        height: 120,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 60,
        margin: 20,
        justifyContent: 'center',
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