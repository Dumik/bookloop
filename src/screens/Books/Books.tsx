import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import tw from 'twrnc';
import {Bell, Search} from 'lucide-react-native';

import {RootStackParamList, Screens} from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, Screens.Books>;

const Books = () => {
  return (
    <View style={tw`flex-1 bg-gray-200`}>
      <View style={tw`bg-white p-4 flex-row items-end justify-between h-32`}>
        <Search size={25} />
        <TextInput
          style={tw`border border-gray-300 rounded-lg px-4 py-2 flex-1 mx-4`}
          placeholder="Пошук книг..."
          placeholderTextColor="#aaa"
        />
        <Bell size={25} />
      </View>

      <View style={tw`p-4`}>
        <Text style={tw`text-black`}>Categories</Text>
      </View>

      <View style={tw`p-4`}>
        <Text style={tw`text-black`}>Viewed</Text>
      </View>

      <View style={tw`p-4`}>
        <Text style={tw`text-black`}>Recommendation</Text>
      </View>
    </View>
  );
};

export default Books;
