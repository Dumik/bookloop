import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {View, Image} from 'react-native';

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Favorites: undefined;
  Library: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabIcon: React.FC<{focused: boolean; iconSource: any}> = ({
  focused,
  iconSource,
}) => (
  <View className={`p-2 ${focused ? 'bg-gray-100 rounded-full' : ''}`}>
    <Image source={iconSource} className="w-6 h-6" />
  </View>
);

// Create a memoized home icon component
const HomeTabIcon = React.memo(({focused}: {focused: boolean}) => (
  <TabIcon focused={focused} iconSource={require('../assets/icons/home.png')} />
));

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
          height: 60,
          paddingBottom: 8,
        },
        headerStyle: {
          backgroundColor: '#F5F5F5',
        },
        headerTitleStyle: {
          fontWeight: '600',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeTabIcon,
        }}
      />
      {/* ... rest of the Tab.Screen components remain the same ... */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
