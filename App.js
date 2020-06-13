import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignupScreen from './app/screens/Signup';
import SigninScreen from './app/screens/Signin';
import ProfileScreen from './app/screens/Profile';
import ContactScreen from './app/screens/Contact';
import PostScreen from './app/screens/Post';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>  
  );
}

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" mode="modal" headerMode="none">
      <Stack.Screen name="Home" component={TabStack} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default App;
