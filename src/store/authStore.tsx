import {create} from 'zustand';
import {Alert} from 'react-native';
import {User} from '@supabase/supabase-js';
import {useNavigation} from '@react-navigation/native';

import {supabase} from '../config/supabase';
import {RequireAuthNavigationProp, Screens} from '../navigation/types';

type AuthStore = {
  user: User | null;
  setUser: (user: User) => void;
  logOut: () => void;
};

export const useAuthStore = create<AuthStore>(set => ({
  user: null,

  setUser: (user: User) => {
    set({user});
  },
  logOut: () => {
    supabase.auth.signOut();
    set({user: null});
  },
}));
