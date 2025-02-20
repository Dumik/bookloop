import {Heart, Library, MessageCircle, User} from 'lucide-react-native';
import {Screens} from '../navigation/types';
import React from 'react';

type TabsIconsProps = {
  routeName: string;
  selectedTab: string;
};

export const TabsIcons: React.FC<TabsIconsProps> = ({
  routeName,
  selectedTab,
}) => {
  const color = routeName === selectedTab ? 'black' : 'gray';

  switch (routeName) {
    case Screens.Books:
      return <Library size={25} color={color} />;
    case Screens.Favorite:
      return <Heart size={25} color={color} />;
    case Screens.Chats:
      return <MessageCircle size={25} color={color} />;
    case Screens.Profile:
      return <User size={25} color={color} />;
    default:
      return <Library size={25} color={color} />;
  }
};
