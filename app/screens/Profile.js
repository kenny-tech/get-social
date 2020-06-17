import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { baseurl } from '../../config/config';
import { logout } from '../actions/auth';
import style from '../styles/style';

const options = {
    title: 'Select Photo',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};

const Profile = ({ navigation }) => {

    const [editProfile, setEditProfile] = useState(false);
    const [name, setName] = useState('');
    const [userDetails, setUserDetails] = useState([]);
    const [imageSelected, setImageSelected] = useState(false);
    const [imageSource, setImageSource] = useState('');
    const [imageUri, setImageUri] = useState('');
    const [base64Value, setBase64Value] = useState('');
    const [profilePicture, setProfilePicture] = useState(userDetails.profilePicture);
    const [totalUserPosts, setTotalUserPosts] = useState(0);

    const user = useSelector(state => state.auth.user);

    const dispatch = useDispatch();

    const getProfile = () => {
        const userId = user.id;
        fetch(baseurl + '/getUser/' + userId)
        .then(response => response.json())
        .then(response => setUserDetails(response.data))
        .then(response => console.log('user details: ',userDetails.profilePicture))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        getProfile();
        countUserPhotos();
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

    const updateProfilePicture = () => {
        ImagePicker.showImagePicker(options, (response) => {
          
            if (response.didCancel) {
                // console.log('User cancelled image picker');
                setImageSelected(false);
            } else if (response.error) {
                // console.log('ImagePicker Error: ', response.error);
                setImageSelected(false);
            } else if (response.customButton) {
                // console.log('User tapped custom button: ', response.customButton);
                setImageSelected(false);
            } else {
                const source = { uri: response.uri };
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                const base64Value = response.data;
                
                setImageSource(source);
                setImageSelected(true);
                setImageUri(response.uri);
                setBase64Value(base64Value);
                // console.log('Base 64 profile pics : ', base64Value);
                saveProfilePicture(base64Value)
            }
        });
    }

    const saveProfilePicture = (base64Value) => {
        const userId = user.id;
        const data = { base64ProfilePic: base64Value };
        fetch(baseurl + '/updateProfilePicture/' + userId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .catch(error => console.log(error))
        Alert.alert('Success', 'Profile picture successfully updated');
        getProfile();
    }

    const countUserPhotos = () => {
        const userId = user.id;
        fetch(baseurl + '/countUserPhotos/' + userId)
        .then(response => response.json())
        .then(response => setTotalUserPosts(response.data))
        .catch(error => console.log(error))
    }

    const logoutUser = () => {
        dispatch(logout());
        navigation.navigate('Signin');
    }
 
    return (
        <View style={style.container}>
            <View style={style.headerView}>
                <View style={style.headerViewMargin}>
                    <TouchableOpacity onPress={() => logoutUser()}>
                        <Text style={style.headerTextRight}>Logout</Text>
                    </TouchableOpacity>
                </View>
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
                <TouchableOpacity onPress={() => updateProfilePicture()}>
                    {
                        profilePicture === '' ? (<Image style={styles.profilePics} />) : (<Image source={{uri: userDetails.profilePicture}} style={styles.profilePics} />)
                    }
                </TouchableOpacity>
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
                <View style={{width: 400, height: 50, backgroundColor: 'white', marginTop: 20, alignItems: 'center'}}>
                    <Text style={styles.countView}>{totalUserPosts} Posts</Text>
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
        padding: 15,
        fontWeight: 'bold',
    },
    profileName: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    }
})

export default Profile;