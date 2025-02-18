import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import {supabase} from '../../config/supabase';
import {Screens} from '../../navigation/types';

export const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    const {error} = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      Alert.alert('Login failed', error.message);
    } else {
      Alert.alert('Success', 'You are logged in!');
    }
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-200 p-6`}>
      <Text style={tw`text-2xl font-bold text-black mb-4`}>Sign In</Text>

      <TextInput
        style={tw`bg-white p-4 rounded-lg border border-gray-300 w-full mb-4`}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />

      <TextInput
        style={tw`bg-white p-4 rounded-lg border border-gray-300 w-full mb-4`}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <Pressable
        style={tw`bg-blue-500 p-4 rounded-lg shadow w-full mb-4`}
        onPress={handleSignIn}
        disabled={loading}>
        <Text style={tw`text-white text-lg text-center`}>
          {loading ? 'Logging in...' : 'Login'}
        </Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate(Screens.SignUpScreen)}>
        <Text style={tw`text-blue-500 text-lg`}>
          Don't have an account? Sign Up
        </Text>
      </Pressable>
    </View>
  );
};
