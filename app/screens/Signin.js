import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

import styles from '../styles/style';

const Signin = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignin = () => {
        Alert.alert('Signin')
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
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleSignin()}
            >
                <Text style={{color: 'white', textAlign: 'center'}}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.bottomView}>
                <Text style={styles.textStyle}>Don't have an account? <Text style={{fontWeight: 'bold'}} onPress={() => navigation.navigate('Signup')}>Sign up</Text></Text>
            </View>
        </View>
    )
}

export default Signin;