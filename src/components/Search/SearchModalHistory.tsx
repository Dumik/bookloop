import React from 'react';
import {View, Text, TouchableOpacity, Pressable, Alert} from 'react-native';
import tw from 'twrnc';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import {useSearchStore} from '../../store/searchStore';
import {X} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';
import {RequireAuthNavigationProp, Screens} from '@navigation/types';

const searchHistory = [
  'iPhone 14',
  'MacBook Pro',
  'AirPods Pro',
  'Apple Watch',
];

export const SearchModalHistory = () => {
  const {isVisible, closeSearch, searchValue, setSearchValue} =
    useSearchStore();
  const navigation = useNavigation<RequireAuthNavigationProp>();

  const translateY = useSharedValue(isVisible ? 0 : 700);

  React.useEffect(() => {
    if (isVisible) {
      translateY.value = withTiming(0, {duration: 100});
    } else {
      translateY.value = withTiming(700, {duration: 300}, () => {
        runOnJS(closeSearch)();
      });
    }
  }, [isVisible]);

  const modalStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));

  const handleRemoveItem = (item: string) => {};

  const handleSelectItem = (item: string) => {
    setSearchValue(item);
    closeSearch();
    navigation.navigate(Screens.Search);
  };

  if (!isVisible) return null;

  return (
    <Animated.View
      style={[
        tw`absolute bottom-0 right-0 w-full bg-white p-5 h-full rounded-t-xl `,
        {top: 120, zIndex: 100},
        modalStyle,
      ]}>
      <View style={tw`flex-row justify-between items-center mb-4`}>
        <Text style={tw`text-lg font-bold`}>Історія пошуку</Text>
      </View>

      <View style={tw`mt-2`}>
        {searchHistory.length > 0 ? (
          searchHistory.map(item => (
            <Pressable
              key={item}
              onPress={() => handleSelectItem(item)}
              style={tw`flex-row justify-between items-center py-2 border-b border-gray-200`}>
              <Text style={tw`text-gray-700 text-base`}>{item}</Text>
              <TouchableOpacity onPress={() => handleRemoveItem(item)}>
                <X size={18} color="gray" />
              </TouchableOpacity>
            </Pressable>
          ))
        ) : (
          <Text style={tw`text-gray-400 text-center mt-4`}>
            Немає історії пошуку
          </Text>
        )}
      </View>
    </Animated.View>
  );
};
