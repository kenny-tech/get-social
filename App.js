import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, Alert } from 'react-native';

import SignupScreen from './app/screens/Signup';
import SigninScreen from './app/screens/Signin';
import ProfileScreen from './app/screens/Profile';
import ContactScreen from './app/screens/Contact';
import PostScreen from './app/screens/Post';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer mode="modal">
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}} initialRouteName="Post">
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen options={{headerShown: false}} name="Signup" component={SignupScreen} />
        <Stack.Screen options={{headerShown: false}} name="Signin" component={SigninScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;