import React from 'react';
import {TouchableHighlight} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {Favorite} from '../screens/Favorite';
import {Screens} from './types';

import tw from 'twrnc';
import {Chats, CreateItem} from '../screens';
import {Profile} from '../screens/Profile';
import {Plus} from 'lucide-react-native';
import {TabBarButton} from '@components/TabBarButton';
import {BooksStackNavigator} from './BookStack';

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
      initialRouteName={Screens.BooksStack}
      screenOptions={{headerShown: false}}
      tabBar={TabBarButton}
      renderCircle={({navigate}: any) => (
        <TouchableHighlight
          style={tw`w-16 h-16 rounded-full bg-white justify-center items-center shadow-md -mt-3`}
          onPress={() => navigate(Screens.Create)}>
          <Plus size={25} color="black" />
        </TouchableHighlight>
      )}>
      <CurvedBottomBar.Screen
        name={Screens.BooksStack}
        position="LEFT"
        component={BooksStackNavigator}
      />
      <CurvedBottomBar.Screen
        name={Screens.Favorite}
        position="LEFT"
        component={Favorite}
      />

      <CurvedBottomBar.Screen
        name={Screens.Create}
        position="CENTER"
        component={CreateItem}
      />
      <CurvedBottomBar.Screen
        name={Screens.Chats}
        position="RIGHT"
        component={Chats}
      />
      <CurvedBottomBar.Screen
        name={Screens.Profile}
        position="RIGHT"
        component={Profile}
      />
    </CurvedBottomBar.Navigator>
  );
};
