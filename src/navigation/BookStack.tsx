import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Search} from '../screens';
import {BooksStackParamList, Screens} from './types';
import Books from '@screens/Books/Books';

const BooksStack = createNativeStackNavigator<BooksStackParamList>();

export const BooksStackNavigator = () => {
  return (
    <BooksStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <BooksStack.Screen name={Screens.Books} component={Books} />
      <BooksStack.Screen
        name={Screens.Search}
        component={Search}
        options={{headerShown: false, title: 'Search'}}
      />
    </BooksStack.Navigator>
  );
};
