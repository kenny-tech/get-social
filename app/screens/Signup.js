import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

import styles from '../styles/style';

const Signup = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleSignup = () => {
        Alert.alert('Signup')
    }

    return (
        <View style={styles.authContainer}>
            <Text style={styles.logoText}>Get Social</Text>
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