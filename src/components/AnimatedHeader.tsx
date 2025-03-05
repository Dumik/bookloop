import React from 'react';
import {Dimensions} from 'react-native';
import tw from 'twrnc';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  SharedValue,
} from 'react-native-reanimated';

const {width} = Dimensions.get('window');

interface AnimatedHeaderProps {
  title: string;
  scrollY: SharedValue<number>;
}

export const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({
  title,
  scrollY,
}) => {
  const animatedContainerStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [0, 100],
      [128, 96],
      Extrapolate.CLAMP,
    );
    const backgroundColor = scrollY.value > 50 ? 'white' : 'transparent';

    return {height, backgroundColor};
  });

  const animatedTitleStyle = useAnimatedStyle(() => {
    const fontSize = interpolate(
      scrollY.value,
      [0, 100],
      [32, 18],
      Extrapolate.CLAMP,
    );
    const translateY = interpolate(
      scrollY.value,
      [0, 100],
      [0, -10],
      Extrapolate.CLAMP,
    );
    const translateX = interpolate(
      scrollY.value,
      [0, 100],
      [0, width / 2 - 45],
      Extrapolate.CLAMP,
    );

    return {
      fontSize,
      transform: [{translateY}, {translateX}],
      color: 'black',
    };
  });

  return (
    <Animated.View
      style={[tw`px-4 flex-row items-end shadow-md `, animatedContainerStyle]}>
      <Animated.Text
        style={[tw`font-bold absolute left-4`, animatedTitleStyle]}>
        {title}
      </Animated.Text>
    </Animated.View>
  );
};
