import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importing screens
import VeltoWelcomeScreen from './screens/VeltoWelcomeScreen';
import LoopFeatureScreen from './screens/LoopFeatureScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import CallToActionScreen from './screens/CallToActionScreen';

// Define the type for your navigation stack
export type RootStackParamList = {
  Welcome: undefined;
  Feature: undefined;
  CallToAction: undefined;
  SignUp: undefined;
  Login: undefined;
};

// Create a typed stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false, // Hide default headers for a clean look
        }}
      >
        <Stack.Screen name="Welcome" component={VeltoWelcomeScreen} />
        <Stack.Screen name="Feature" component={LoopFeatureScreen} />
        <Stack.Screen name="CallToAction" component={CallToActionScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
