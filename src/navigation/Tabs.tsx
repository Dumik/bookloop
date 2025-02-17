import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Books from '../screens/Books/Books';
import {Favorite} from '../screens/Favorite';
import {Screens} from './types';

export const Tabs = () => {
  return (
    // @ts-ignore
    <CurvedBottomBar.Navigator
      type="DOWN"
      style={styles.bottomBar}
      shadowStyle={styles.shadow}
      height={85}
      circleWidth={80}
      bgColor="#fff"
      initialRouteName={Screens.Books}
      screenOptions={{headerShown: false}}
      renderCircle={({navigate}: any) => (
        <Pressable
          style={styles.floatingButton}
          onPress={() => navigate(Screens.Create)}>
          <Text style={styles.plusIcon}>+</Text>
        </Pressable>
      )}>
      <CurvedBottomBar.Screen
        name={Screens.Books}
        position="LEFT"
        component={Books}
      />
      <CurvedBottomBar.Screen
        name={Screens.Favorite}
        position="LEFT"
        component={Favorite}
      />
      <CurvedBottomBar.Screen
        name={Screens.Chats}
        position="RIGHT"
        component={Favorite}
      />
      <CurvedBottomBar.Screen
        name={Screens.Profile}
        position="RIGHT"
        component={Favorite}
      />
    </CurvedBottomBar.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: -3},
    shadowRadius: 4,
    elevation: 5,
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 5,

    marginTop: -10,
  },
  plusIcon: {
    color: '#000',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
