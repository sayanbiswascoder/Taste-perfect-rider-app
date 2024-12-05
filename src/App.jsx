/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PermissionsAndroid } from 'react-native';
import OnboardingScreen from './screens/auth/OnBoarding';
import LoginSignupScreen from './screens/auth/LoginSignup';
import ForgetPasswordScreen from './screens/auth/ForgetPassword';
import MainApp from './screens/mainApp/MainApp';


const Stack = createStackNavigator();


function App() {
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  return <SafeAreaView style={{ height: '100%', width: '100%' }}>
    <StatusBar
      barStyle="light-content"
      backgroundColor="#f75454"
      translucent={true}
      showHideTransition="fade"
      hidden={false}
    />
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="LoginSignup" component={LoginSignupScreen} />
        <Stack.Screen name="ForgetPass" component={ForgetPasswordScreen} />
        <Stack.Screen name="MainApp" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>;
}

export default App;
