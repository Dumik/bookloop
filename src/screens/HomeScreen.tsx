import React from 'react';
import {View, Text, ScrollView, TextInput, Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Favorites: undefined;
  Library: undefined;
  Profile: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = () => {
  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="px-4 py-3 flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Image
            source={require('../assets/icons/avatar.png')}
            className="w-8 h-8 rounded-full"
          />
          <Text className="ml-2 text-lg font-semibold">Hi, user!</Text>
        </View>
        <Image
          source={require('../assets/icons/cart.png')}
          className="w-6 h-6"
        />
      </View>

      {/* Search Bar */}
      <View className="px-4 mb-4">
        <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2">
          <TextInput placeholder="Search for books" className="flex-1" />
          <Image
            source={require('../assets/icons/search.png')}
            className="w-5 h-5"
          />
        </View>
      </View>

      <ScrollView className="flex-1">
        {/* ... rest of the component remains the same ... */}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
