import tw from 'twrnc';
import React from 'react';
import {Pressable, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {RequireAuthNavigationProp, Screens} from '../../navigation/types';
import {supabase} from '../../config/supabase';
import {useMe} from '../../hooks';

export const Profile = () => {
  const navigation = useNavigation<RequireAuthNavigationProp>();
  const {user, accessToken} = useMe();

  return (
    <View style={tw`flex-1 bg-gray-200`}>
      <View
        style={tw`bg-white p-4 flex-row items-center justify-between h-24`}
      />
      <View style={tw`p-4`}>
        <Text style={tw`text-black text-lg font-bold mb-4`}>Profile</Text>
        {user?.email ? (
          <Pressable onPress={() => supabase.auth.signOut()}>
            <Text style={tw`text-red-500 text-lg`}>Log out</Text>
          </Pressable>
        ) : (
          <Pressable
            style={tw`bg-white p-4 rounded-lg shadow flex-row items-center justify-center`}
            onPress={() => navigation.navigate(Screens.SignInScreen)}>
            <Text style={tw`text-black text-lg`}>Log in</Text>
          </Pressable>
        )}
        {user && <Text>{user.email}</Text>}
        {accessToken ? <Text>{accessToken}</Text> : <Text>no token</Text>}
      </View>
    </View>
  );
};
