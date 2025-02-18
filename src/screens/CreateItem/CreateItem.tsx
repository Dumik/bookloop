import {View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import React from 'react';
import tw from 'twrnc';

export const CreateItem = () => {
  return (
    <View style={tw`flex-1 bg-gray-200 0`}>
      <View
        style={tw`bg-white p-4 flex-row items-center justify-between h-24`}></View>
      <View style={tw`p-4`}>
        <Text style={tw`text-black`}>Create</Text>
      </View>
    </View>
  );
};
