import React, {useState} from 'react';
import {View, ImageBackground, Alert, Platform} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import tw from 'twrnc';
import {ImagePickerPopover} from './ImagePickerPopover';

type ImagePickerProps = {
  onImagePicked: (uri: string) => void;
  imageUri: string | null;
};

const placeholderImage = require('../../assets/rtaImage.png');

export const ImagePicker: React.FC<ImagePickerProps> = ({
  onImagePicked,
  imageUri,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleImagePick = async (fromCamera: boolean) => {
    setModalVisible(false);
    const options: any = {mediaType: 'photo', quality: 1};

    const callback = (response: any) => {
      if (response.didCancel) return;
      if (response.errorMessage) {
        Alert.alert('Error', response.errorMessage);
        return;
      }
      if (response.assets && response.assets.length > 0) {
        onImagePicked(response.assets[0].uri);
      }
    };

    if (isModalVisible) return null;

    if (fromCamera) {
      if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTV) {
        Alert.alert('Error', 'Camera is not available on iOS Simulators');
        return;
      }
      launchCamera(options, callback);
    } else {
      launchImageLibrary(options, callback);
    }
  };

  return (
    <View style={tw`flex-1 items-center justify-center bg-gray-100 p-4`}>
      <ImageBackground
        source={imageUri ? {uri: imageUri} : placeholderImage}
        style={tw`w-full h-48 rounded-lg overflow-hidden justify-end items-center`}
        resizeMode="cover"
      />

      <ImagePickerPopover
        placement="top"
        Name="top-popover"
        onPickImage={handleImagePick}
      />
    </View>
  );
};
