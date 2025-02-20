import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import {useMe} from '../../hooks';
import {RequireAuthNavigationProp, Screens} from '../../navigation/types';
import {supabase} from '../../config/supabase';

export const Profile = () => {
  const navigation = useNavigation<RequireAuthNavigationProp>();
  const {user} = useMe();

  return (
    <View style={tw`flex-1 bg-gray-100`}>
      <View style={tw`bg-white p-6 pt-20 flex-row items-center`}>
        <View style={tw`ml-4`}>
          <Text style={tw`text-lg font-bold text-black`}>
            {user?.email || 'Guest'}
          </Text>
          <Text style={tw`text-gray-500`}>
            {user?.email || 'Sign in to access full features'}
          </Text>
        </View>
      </View>

      <View style={tw`mt-4 bg-white p-4`}>
        <ProfileOption text="My Ads" />
        <ProfileOption text="Saved Items" />
        <ProfileOption text="Settings" />
        <ProfileOption text="Help & Support" />
      </View>

      <View style={tw`mt-4 bg-white p-4`}>
        {user ? (
          <Pressable
            onPress={() => supabase.auth.signOut()}
            style={tw`flex-row items-center p-3`}>
            <Text style={tw`ml-4 text-red-500 text-lg`}>Log out</Text>
          </Pressable>
        ) : (
          <Pressable
            style={tw`bg-blue-500 p-4 rounded-lg flex-row items-center justify-center`}
            onPress={() => navigation.navigate(Screens.SignInScreen)}>
            <Text style={tw`text-white text-lg`}>Log in</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

const ProfileOption = ({text}: {text: string}) => (
  <Pressable style={tw`flex-row items-center p-4 border-b border-gray-200`}>
    <Text style={tw`ml-4 text-lg text-black`}>{text}</Text>
  </Pressable>
);
