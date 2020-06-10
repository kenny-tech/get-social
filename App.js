import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignupScreen from './app/screens/Signup';
import SigninScreen from './app/screens/Signin';
import WelcomeScreen from './app/screens/Welcome';
import ContactScreen from './app/screens/Contact';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer mode="modal">
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="Signin" component={SigninScreen} />
        <Stack.Screen options={{headerShown: false}} name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
