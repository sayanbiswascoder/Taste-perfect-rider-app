/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Home';
import AccountScreen from './Account';
import ReviewsScreen from './Reviews';
import WorkScreen from './Work';
import RidesScreen from './Rides';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: { color: 'red' },
            }}
            tabBarHideOnKeyboard={true}
        >
            <Tab.Screen name="Home" options={{ title: 'Home', tabBarIcon: ({ focused, size }) => <Icon name={focused ? 'bicycle' : 'bicycle-outline'} size={size} color="red" /> }} component={HomeScreen} />
            <Tab.Screen name="Rides" options={{ title: 'Rides', tabBarIcon: ({ focused, size }) => <Icon name={focused ? 'list' : 'list-outline'} size={size} color="red" /> }} component={RidesScreen} />
            <Tab.Screen name="Work" options={{ title: 'Work', tabBarIcon: ({ focused, size }) => <Icon name={focused ? 'stats-chart' : 'stats-chart-outline'} size={size} color="red" /> }} component={WorkScreen} />
            <Tab.Screen name="Account" options={{ title: 'Account', tabBarIcon: ({ focused, size }) => <Icon name={focused ? 'person' : 'person-outline'} size={size} color="red" /> }} component={AccountScreen} />
        </Tab.Navigator>
    );
};

const MainApp = () => {
    return (
        <SafeAreaView style={{ height: '100%' }}>
            <StatusBar backgroundColor="red" />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="MainAppStack" component={TabNavigator} />
                <Stack.Screen name="Reviews" component={ReviewsScreen} />
            </Stack.Navigator>
        </SafeAreaView>
    );
};

export default MainApp;

