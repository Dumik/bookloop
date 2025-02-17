import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import {SignInScreen} from '../screens/SignInScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Details" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
