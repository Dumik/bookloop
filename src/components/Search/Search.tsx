import React, {useRef} from 'react';
import {View, TextInput, TouchableWithoutFeedback} from 'react-native';
import tw from 'twrnc';
import {Bell, X, Search as SearchIcon} from 'lucide-react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import {useSearchStore} from '../../store/searchStore';

export const Search = () => {
  const {isVisible, openSearch, closeSearch} = useSearchStore();
  const searchRef = useRef<TextInput | null>(null);

  const iconOpacity = useSharedValue(1);
  const closeIconOpacity = useSharedValue(0);
  const iconScale = useSharedValue(1);
  const closeIconScale = useSharedValue(0.8);

  const handleOnFocus = () => {
    openSearch();
    iconOpacity.value = withTiming(0, {duration: 200});
    iconScale.value = withTiming(0.8, {duration: 200});
    closeIconOpacity.value = withTiming(1, {duration: 200});
    closeIconScale.value = withTiming(1, {duration: 200});
  };

  const closeModal = () => {
    closeSearch();
    searchRef.current?.blur();
    iconOpacity.value = withTiming(1, {duration: 200});
    iconScale.value = withTiming(1, {duration: 200});
    closeIconOpacity.value = withTiming(0, {duration: 200});
    closeIconScale.value = withTiming(0.8, {duration: 200});
  };

  const iconStyle = useAnimatedStyle(() => ({
    opacity: iconOpacity.value,
    transform: [{scale: iconScale.value}],
  }));

  const closeIconStyle = useAnimatedStyle(() => ({
    opacity: closeIconOpacity.value,
    transform: [{scale: closeIconScale.value}],
  }));

  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`flex-row items-center p-4 bg-white`}>
        <SearchIcon size={25} />
        <TextInput
          ref={searchRef}
          style={tw`border border-gray-300 rounded-lg px-4 py-2 flex-1 mx-4`}
          placeholder="Book search..."
          placeholderTextColor="#aaa"
          onFocus={handleOnFocus}
        />
        <TouchableWithoutFeedback
          onPress={isVisible ? closeModal : handleOnFocus}>
          <View style={tw`w-8 h-8 items-center justify-center`}>
            <Animated.View style={[tw`absolute`, iconStyle]}>
              <Bell size={25} />
            </Animated.View>
            <Animated.View style={[tw`absolute`, closeIconStyle]}>
              <X size={25} />
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
