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
  Search = 'Search',
  BooksStack = 'BooksStack',
}

export type BooksStackParamList = {
  [Screens.Books]: undefined;
  [Screens.Search]: undefined;
};

export type RootStackParamList = {
  [Screens.SignInScreen]: undefined;
  [Screens.SignUpScreen]: undefined;
  [Screens.Books]: undefined;
  [Screens.Chats]: undefined;
  [Screens.Favorite]: undefined;
  [Screens.Create]: undefined;
  [Screens.Tabs]: undefined;
  [Screens.Profile]: undefined;
  [Screens.Search]: undefined;
};

export type RequireAuthNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
