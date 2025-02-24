import {View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import React from 'react';
import tw from 'twrnc';
import {SearchHeader} from '@components/Search';
import {useSearchStore} from '../../store/searchStore';

export const Search = () => {
  const {searchValue} = useSearchStore();
  return (
    <View style={tw`flex-1 bg-gray-200 relative h-[100%]`}>
      <View style={tw`bg-white px-4 flex-row items-end justify-between h-32`}>
        <SearchHeader isSearchScreen />
      </View>
      <View style={tw`p-4`}>
        <Text style={tw`text-black text-2xl`}>searchValue: {searchValue}</Text>
      </View>
    </View>
  );
};
