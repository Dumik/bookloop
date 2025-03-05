import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import tw from 'twrnc';
import Animated, {useSharedValue} from 'react-native-reanimated';
import {AnimatedHeader} from '@components/AnimatedHeader';
import {ImagePicker} from '@components/ImagePicker/ImagePicker';

export const CreateItem = () => {
  const scrollY = useSharedValue(0);
  const [imageUri, setImageUri] = useState<string | null>(null);

  const onImagePicked = (uri: string) => {
    setImageUri(uri);
  };

  return (
    <View style={tw`flex-1 bg-gray-200`}>
      <AnimatedHeader title="Create" scrollY={scrollY} />

      <Animated.ScrollView
        onScroll={event => {
          scrollY.value = event.nativeEvent.contentOffset.y;
        }}
        scrollEventThrottle={16}
        style={tw`flex-1 p-4 h-[1300px]`}>
        <ImagePicker onImagePicked={onImagePicked} imageUri={imageUri} />

        <View style={tw`h-96`} />
      </Animated.ScrollView>
    </View>
  );
};
