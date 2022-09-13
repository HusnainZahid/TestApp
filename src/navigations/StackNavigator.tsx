import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login/Login';
import DrawerNavigator from './DrawerNavigator';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';
import Settings from '../screens/settings/Settings';

const Stack = createNativeStackNavigator();

export const  StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
      <Stack.Screen name="Settings" component={Settings} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
