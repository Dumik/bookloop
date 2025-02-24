import React from 'react';
import {Text} from 'react-native';
import tw from 'twrnc';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import {useSearchStore} from '../../store/searchStore';

export const SearchModalHistory = () => {
  const {isVisible, closeSearch} = useSearchStore();
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

  if (!isVisible) return null;

  return (
    <Animated.View
      style={[
        tw`absolute bottom-0 right-0 w-full bg-white p-5 h-full h-[1000px]`,
        {marginTop: 125, top: 0, zIndex: 100},
        modalStyle,
      ]}>
      <Text style={tw`text-lg font-bold`}>Історія пошуку</Text>
      <Text style={tw`text-gray-500 mt-2`}>- iPhone 14</Text>
      <Text style={tw`text-gray-500 mt-2`}>- MacBook Pro</Text>
    </Animated.View>
  );
};
