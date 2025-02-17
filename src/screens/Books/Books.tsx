import React from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Favorites: undefined;
  Library: undefined;
  Profile: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Books = () => {
  return (
    <View className="flex-1 bg-white">
      <View className="px-4 py-3 flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Text className="ml-2 text-lg font-semibold">Hi, user!</Text>
        </View>
      </View>

      <View className="px-4 mb-4">
        <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2">
          <TextInput placeholder="Search for books" className="flex-1" />
        </View>
      </View>

      <ScrollView className="flex-1"></ScrollView>
    </View>
  );
};

export default Books;
