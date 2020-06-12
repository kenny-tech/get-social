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
const PostStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Timeline">
          {() => (
            <PostStack.Navigator screenOptions={{headerTitleAlign: 'center'}} initialRouteName="Signup">
              <Stack.Screen name="Post" component={PostScreen} />
              <Stack.Screen options={{headerShown: false}} name="Signup" component={SignupScreen} />
              <Stack.Screen options={{headerShown: false}} name="Signin" component={SigninScreen} />
            </PostStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Profile">
          {() => (
            <ProfileStack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="Contact" component={ContactScreen} />
            </ProfileStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
