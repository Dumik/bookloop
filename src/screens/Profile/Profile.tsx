import {Pressable, View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList, Screens} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RequireAuthNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const Profile = () => {
  const navigation = useNavigation<RequireAuthNavigationProp>();

  return (
    <View style={tw`flex-1 bg-gray-200`}>
      <View
        style={tw`bg-white p-4 flex-row items-center justify-between h-24`}
      />
      <View style={tw`p-4`}>
        <Text style={tw`text-black text-lg font-bold mb-4`}>Profile</Text>
        <Pressable
          style={tw`bg-white p-4 rounded-lg shadow flex-row items-center justify-center`}
          onPress={() => navigation.navigate(Screens.SignInScreen)}>
          <Text style={tw`text-black text-lg`}>Log in</Text>
        </Pressable>
      </View>
    </View>
  );
};
