import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import styles from '../styles/style';
import { signup } from '../actions/auth';

const Signup = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const errorMessage = useSelector(state => state.auth.errorMessage)

    const dispatch = useDispatch();

    const handleSignup = () => {
        if(name.trim()!='' && email.trim()!='' && password.trim()!='' && passwordConfirmation.trim()!='') {
            if(password !== passwordConfirmation) {
                Alert.alert('Error', 'Password & Password Confirmation must match')
            } else {
                dispatch(signup(email,password,name));
                if(errorMessage === 'Email already taken') {
                    Alert.alert('Error', 'Email already taken')
                } 
                else if(errorMessage === '') {
                    Alert.alert('Success', 'Registration successful. Please login')
                }
                else {
                    Alert.alert('Success', 'Registration successful. Please login');
                    navigation.navigate('Signin');
                }
            }
        } else {
            Alert.alert('Error', 'All fields are required');
        }
    }

    return (
        <View style={styles.authContainer}>
            <Text style={styles.logoText}>Get Social</Text>
            <TextInput 
                editable={true}
                placeholder={'Full Name'}
                placeholderTextColor='white'
                onChangeText={text => setName(text)}
                defaultValue={name}
                style={styles.textInput}
            />
            <TextInput 
                editable={true}
                keyboardType={'email-address'}
                placeholder={'Email address'}
                placeholderTextColor='white'
                style={{color: 'white'}}
                onChangeText={text => setEmail(text)}
                defaultValue={email}
                style={styles.textInput}
            />
            <TextInput 
                editable={true}
                secureTextEntry={true}
                placeholder={'Password'}
                placeholderTextColor='white'
                onChangeText={text => setPassword(text)}
                defaultValue={password}
                style={styles.textInput}
            />
            <TextInput 
                editable={true}
                secureTextEntry={true}
                placeholder={'Password confirmation'}
                placeholderTextColor='white'
                onChangeText={text => setPasswordConfirmation(text)}
                defaultValue={passwordConfirmation}
                style={styles.textInput}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleSignup()}
            >
                <Text style={{color: 'white', textAlign: 'center'}}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.bottomView}>
                <Text style={styles.textStyle}>Already Signed up? <Text style={{fontWeight: 'bold'}} onPress={() => navigation.navigate('Signin')}>Sign in</Text></Text>
            </View>
        </View>
    )
}

export default Signup;