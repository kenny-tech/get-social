import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const Signin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        Alert.alert('Signup')
    }

    return (
        <View style={styles.conatiner}>
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
                onPress={() => handleSignup()}
            >
                <Text style={{color: 'white'}}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#08457e'
    },
    textInput : {
        width: 250, 
        marginVertical: 10, 
        padding: 5, 
        color: 'white', 
        borderColor: 'white', 
        borderBottomWidth: 1,
    },
    button: {
        width: 250, 
        backgroundColor: '#808080', 
        paddingVertical: 10, 
        paddingHorizontal: 20, 
        borderRadius: 5
    }
})

export default Signin;