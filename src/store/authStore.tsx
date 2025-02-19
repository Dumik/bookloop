import {create} from 'zustand';
import {Alert} from 'react-native';
import {User} from '@supabase/supabase-js';
import {useNavigation} from '@react-navigation/native';

import {supabase} from '../config/supabase';
import {RequireAuthNavigationProp, Screens} from '../navigation/types';

type AuthStore = {
  user: User | null;
  signIn: ({email, password}: {email: string; password: string}) => void;
  signUp: ({email, password}: {email: string; password: string}) => void;
  logOut: () => void;
};

export const useAuthStore = create<AuthStore>(set => ({
  user: null,
  signIn: async ({email, password}: {email: string; password: string}) => {
    const navigation = useNavigation<RequireAuthNavigationProp>();

    try {
      const {error, data} = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        Alert.alert('Login failed', error.message);
      } else {
        Alert.alert('Success', 'You are logged in!');
        set({user: data.user});
        navigation.navigate(Screens.Profile);
      }
    } catch (error) {
      Alert.alert('Login failed');
    }
  },
  signUp: async ({email, password}: {email: string; password: string}) => {
    const navigation = useNavigation<RequireAuthNavigationProp>();

    try {
      const {error, data} = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        Alert.alert('Error', error.message);
      } else {
        Alert.alert('Success', 'You are registered successfully!');
        set({user: data.user});
        navigation.navigate(Screens.Profile);
      }
    } catch (error) {
      Alert.alert('Sign up failed');
    }
  },

  setUser: (user: User) => {
    set({user});
  },
  logOut: () => {
    supabase.auth.signOut();
    set({user: null});
  },
}));
