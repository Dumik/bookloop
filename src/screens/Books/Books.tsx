import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import tw from 'twrnc';

import {RootStackParamList, Screens} from '../../navigation/types';
import {SearchHeader} from '@components/Search';

type Props = NativeStackScreenProps<RootStackParamList, Screens.Books>;

const Books = () => {
  return (
    <View style={tw`flex-1 bg-gray-200 relative h-[100%]`}>
      <View style={tw`bg-white px-4 flex-row items-end justify-between h-32`}>
        <SearchHeader />
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
