import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum Screens {
  SignInScreen = 'SignIn',
  SignUpScreen = 'SignUp',
  Books = 'Books',
  Chats = 'Chats',
  Favorite = 'Favorite',
  Create = 'Create',
  Profile = 'Profile',
  Tabs = 'Tabs',
}

export type RootStackParamList = {
  [Screens.SignInScreen]: undefined;
  [Screens.SignUpScreen]: undefined;
  [Screens.Books]: undefined;
  [Screens.Chats]: undefined;
  [Screens.Favorite]: undefined;
  [Screens.Create]: undefined;
  [Screens.Tabs]: undefined;
  [Screens.Profile]: undefined;
};

export type RequireAuthNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
