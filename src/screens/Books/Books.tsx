import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, Screens} from '../../navigation/types';
import tw from 'twrnc';

type Props = NativeStackScreenProps<RootStackParamList, Screens.Books>;

const Books = () => {
  return (
    <View style={tw`flex-1 bg-gray-200 0`}>
      <View
        style={tw`bg-white p-4 flex-row items-center justify-between pt-20`}>
        <Text style={tw`text-lg font-bold`}>📚</Text>
        <TextInput
          style={tw`border border-gray-300 rounded-lg px-4 py-2 flex-1 ml-4`}
          placeholder="Пошук книг..."
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={tw`p-4`}>
        <Text style={tw`text-black`}>Контент тут...</Text>
      </View>
    </View>
  );
};

export default Books;
