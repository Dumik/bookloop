import React from 'react';
import {Text, Pressable} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import Books from '../screens/Books/Books';
import {Favorite} from '../screens/Favorite';
import {Screens} from './types';

import tw from 'twrnc';

export const Tabs = () => {
  return (
    // @ts-ignore
    <CurvedBottomBar.Navigator
      type="DOWN"
      style={tw`rounded-t-xl`}
      shadowStyle={tw`shadow-md`}
      height={85}
      circleWidth={80}
      bgColor="#fff"
      initialRouteName={Screens.Books}
      screenOptions={{headerShown: false}}
      renderCircle={({navigate}: any) => (
        <Pressable
          style={tw`w-16 h-16 rounded-full bg-white justify-center items-center shadow-md -mt-3`}
          onPress={() => navigate(Screens.Create)}>
          <Text style={tw`text-black text-2xl font-bold`}>+</Text>
        </Pressable>
      )}>
      <CurvedBottomBar.Screen
        name={Screens.Books}
        position="LEFT"
        component={Books}
        options={{headerShown: false}}
      />
      <CurvedBottomBar.Screen
        name={Screens.Favorite}
        position="LEFT"
        component={Favorite}
      />
      <CurvedBottomBar.Screen
        name={Screens.Chats}
        position="RIGHT"
        component={Favorite}
      />
      <CurvedBottomBar.Screen
        name={Screens.Profile}
        position="RIGHT"
        component={Favorite}
      />
    </CurvedBottomBar.Navigator>
  );
};
