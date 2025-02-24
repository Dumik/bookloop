import React, {useRef, useState} from 'react';
import {View, TextInput, TouchableWithoutFeedback} from 'react-native';
import tw from 'twrnc';
import {Bell, X, Search as SearchIcon, ChevronLeft} from 'lucide-react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {RequireAuthNavigationProp, Screens} from '@navigation/types';

import {useSearchStore} from '../../store/searchStore';

export const SearchHeader = ({isSearchScreen}: {isSearchScreen?: boolean}) => {
  const navigation = useNavigation<RequireAuthNavigationProp>();

  const {
    isVisible,
    openSearch,
    closeSearch,
    setSearchValue: setSearch,
    searchValue: search,
  } = useSearchStore();

  const [searchValue, setSearchValue] = useState(search);
  const searchRef = useRef<TextInput | null>(null);

  const iconOpacity = useSharedValue(1);
  const closeIconOpacity = useSharedValue(0);
  const iconScale = useSharedValue(1);
  const closeIconScale = useSharedValue(0.8);

  const searchOnChange = (text: string) => {
    setSearchValue(text);
  };

  const onSubmit = () => {
    setSearch(searchValue);
    navigation.navigate(Screens.Search);
    closeModal();
  };

  const openNotification = () => {};

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
    if (!isSearchScreen) setSearchValue('');
  };

  const iconStyle = useAnimatedStyle(() => ({
    opacity: iconOpacity.value,
    transform: [{scale: iconScale.value}],
  }));

  const closeIconStyle = useAnimatedStyle(() => ({
    opacity: closeIconOpacity.value,
    transform: [{scale: closeIconScale.value}],
  }));

  const goBack = () => {
    setSearch('');
    navigation.goBack();
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`flex-row items-center pb-4  bg-white`}>
        {isSearchScreen ? (
          <ChevronLeft size={30} onPress={goBack} />
        ) : (
          <SearchIcon size={25} />
        )}
        <TextInput
          ref={searchRef}
          style={tw`border border-gray-300 rounded-lg px-2 py-2 flex-1 mx-4`}
          placeholder="Book search..."
          placeholderTextColor="#aaa"
          onFocus={handleOnFocus}
          value={searchValue}
          onChange={e => searchOnChange(e.nativeEvent.text)}
          onSubmitEditing={onSubmit}
          returnKeyType="search"
        />
        <TouchableWithoutFeedback
          onPress={isVisible ? closeModal : openNotification}>
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
