import {Pressable, Text, TouchableOpacity} from 'react-native';
import type {PopoverProps} from 'tamagui';
import {Adapt, Popover} from 'tamagui';
import tw from 'twrnc';

type Props = PopoverProps & {
  onPickImage: (fromCamera: boolean) => void;
  Name?: string;
  shouldAdapt?: boolean;
};

export const ImagePickerPopover = ({
  Name,
  shouldAdapt,
  onPickImage,
  ...props
}: Props) => {
  return (
    <Popover size="$5" allowFlip stayInFrame offset={15} resize {...props}>
      <Popover.Trigger asChild>
        <Pressable style={tw`mt-4`}>
          <Text style={tw`uppercase font-bold text-xs`}>Add Images</Text>
        </Pressable>
      </Popover.Trigger>

      {shouldAdapt && (
        // @ts-ignore
        <Adapt when="sm" platform="touch">
          <Popover.Sheet animation="medium" modal dismissOnSnapToBottom>
            <Popover.Sheet.Frame padding="$4">
              <Adapt.Contents />
            </Popover.Sheet.Frame>
            <Popover.Sheet.Overlay
              backgroundColor="$shadowColor"
              animation="lazy"
              enterStyle={{opacity: 0}}
              exitStyle={{opacity: 0}}
            />
          </Popover.Sheet>
        </Adapt>
      )}

      <Popover.Content
        borderWidth={1}
        borderColor="$borderColor"
        width={300}
        height={150}
        enterStyle={{y: -10, opacity: 0}}
        exitStyle={{y: -10, opacity: 0}}
        elevate
        animation={[
          'quick',
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}>
        <Popover.Arrow borderWidth={1} borderColor="$borderColor" />

        <TouchableOpacity
          onPress={() => onPickImage(true)}
          style={tw`py-3 border-b border-gray-200 w-full`}>
          <Text style={tw`text-center text-lg`}>Take a Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onPickImage(false)}
          style={tw`py-3 w-full`}>
          <Text style={tw`text-center text-lg`}>Choose from Gallery</Text>
        </TouchableOpacity>
      </Popover.Content>
    </Popover>
  );
};
