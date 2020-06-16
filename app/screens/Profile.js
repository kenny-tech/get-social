import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';

import { baseurl } from '../../config/config'
import style from '../styles/style';

const Profile = () => {

    const [editProfile, setEditProfile] = useState(false);
    const [name, setName] = useState('');
    const [userDetails, setUserDetails] = useState([]);

    const user = useSelector(state => state.auth.user);

    const getProfile = () => {
        const userId = user.id;
        fetch(baseurl + '/getUser/' + userId)
        .then(response => response.json())
        .then(response => setUserDetails(response.data))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        getProfile()
    }, []);

    const updateProfile = () => {
        if(name.trim()!='') {
            const userId = user.id;
            const data = { name: name };
            fetch(baseurl + '/updateProfile/' + userId, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(response => console.log('Profile response: ', response))
            .catch(error => console.log(error))
            Alert.alert('Success', 'Profile successfully updated');
            getProfile();
            setEditProfile(false)
        } else {
            Alert.alert('You must enter a name')
        }
    }

    return (
        <View style={style.container}>
            <View style={style.headerView}>
                <View style={style.headerViewMargin}>
                    <Text style={style.headerText}>Profile</Text>
                </View>
                <View style={style.headerViewMargin}>
                    <TouchableOpacity onPress={() => Alert.alert("Add Contact", "Adding contacts...")}>
                        <Text style={style.headerTextRight}>Add Contacts</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
                <View style={styles.profilePics}></View>
                {
                    !editProfile ? (
                    <View>
                        <View>
                        <Text style={styles.profileName}>{userDetails.name}</Text>
                        </View>
                        <View style={{marginVertical: 20}}>
                            <TouchableOpacity
                                style={style.button}
                                onPress={() => setEditProfile(true)}
                            >
                                <Text style={{color: 'white', textAlign: 'center'}}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    ) : (
                        <View>
                            <View>
                            <TextInput 
                                editable={true}
                                onChangeText={text => setName(text)}
                                defaultValue={userDetails.name}
                                style={{ borderWidth: 1, borderColor: 'grey', backgroundColor: 'white', width: 250, height: 40, padding: 5}}
                            />
                            </View>
                            <View style={{marginVertical: 10}}>
                                <TouchableOpacity
                                    style={style.buttonBlue}
                                    onPress={() => updateProfile()}
                                >
                                    <Text style={{color: 'white', textAlign: 'center'}}>Save</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setEditProfile(false)} style={{paddingVertical: 10}}>
                                    <Text style={{textAlign: 'center'}}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }
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
        fontSize: 18,
        textAlign: 'center'
    }
})

export default Profile;