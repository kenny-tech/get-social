import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignupScreen from './app/screens/Signup';
import SigninScreen from './app/screens/Signin'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer initialRouteName="Signin" mode="modal">
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Signin" component={SigninScreen} />
        <Stack.Screen options={{headerShown: false}} name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
