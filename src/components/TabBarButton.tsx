import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {TabsIcons} from './TabsIcons';
import tw from 'twrnc';

type TabBarButtonProps = {
  routeName: string;
  selectedTab: string;
  navigate: (routeName: string) => void;
};

export const TabBarButton: React.FC<TabBarButtonProps> = ({
  routeName,
  selectedTab,
  navigate,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigate(routeName)}
      style={tw`items-center pb-2`}>
      <TabsIcons routeName={routeName} selectedTab={selectedTab} />
      <Text style={tw`text-sm text-black`}>{routeName}</Text>
    </TouchableOpacity>
  );
};
