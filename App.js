import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, Alert } from 'react-native';

import SignupScreen from './app/screens/Signup';
import SigninScreen from './app/screens/Signin';
import ProfileScreen from './app/screens/Profile';
import ContactScreen from './app/screens/Contact';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer mode="modal">
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => {Alert.alert('Adding contacts...')}}>
                <Text style={{color: '#00f', marginRight: 10}}>Add contacts</Text>
            </TouchableOpacity>
          ),
        }}/>
        <Stack.Screen options={{headerShown: false}} name="Signin" component={SigninScreen} />
        <Stack.Screen options={{headerShown: false}} name="Signup" component={SignupScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
