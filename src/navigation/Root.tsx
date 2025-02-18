import React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList, Screens} from './types';
import {Tabs} from './Tabs';
import {SignInScreen, SignUpScreen} from '../screens';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const navigationRef = createNavigationContainerRef();

export const Root = () => {
  const navigationReadyCallback = () => {
    return true;
  };

  return (
    <NavigationContainer ref={navigationRef} onReady={navigationReadyCallback}>
      <RootStack.Navigator initialRouteName={Screens.Tabs}>
        <RootStack.Group>
          <RootStack.Screen
            component={Tabs}
            name={Screens.Tabs}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            component={SignInScreen}
            name={Screens.SignInScreen}
            options={{title: 'Sign In'}}
          />
          <RootStack.Screen
            component={SignUpScreen}
            name={Screens.SignUpScreen}
            options={{title: 'Sign Up'}}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
