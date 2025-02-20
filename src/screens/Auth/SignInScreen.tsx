import tw from 'twrnc';
import React, {useState} from 'react';
import {Eye, EyeOff} from 'lucide-react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TextInput, Pressable, Alert} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList, Screens} from '../../navigation/types';
import {supabase} from '../../config/supabase';

type RequireAuthNavigationProp = NativeStackNavigationProp<RootStackParamList>;

type FormData = {
  email: string;
  password: string;
};

export const SignInScreen = () => {
  const navigation = useNavigation<RequireAuthNavigationProp>();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleSignIn = async ({email, password}: FormData) => {
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
      navigation.popToTop();
    }
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-200 p-6`}>
      <Text style={tw`text-2xl font-bold text-black mb-4`}>Sign In</Text>

      <Controller
        control={control}
        name="email"
        rules={{required: 'Email is required'}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={tw`bg-white p-4 rounded-lg border border-gray-300 w-full mb-2`}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        )}
      />
      {errors.email && (
        <Text style={tw`text-red-500`}>{errors.email.message}</Text>
      )}

      <View style={tw`relative w-full mb-2`}>
        <Controller
          control={control}
          name="password"
          rules={{required: 'Password is required'}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={tw`bg-white p-4 rounded-lg border border-gray-300 w-full`}
              placeholder="Password"
              secureTextEntry={!showPassword}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
            />
          )}
        />
        <Pressable
          style={tw`absolute right-4 top-4`}
          onPress={() => setShowPassword(prev => !prev)}>
          {showPassword ? (
            <EyeOff size={20} color="gray" />
          ) : (
            <Eye size={20} color="gray" />
          )}
        </Pressable>
      </View>
      {errors.password && (
        <Text style={tw`text-red-500`}>{errors.password.message}</Text>
      )}

      <Pressable
        style={tw`bg-blue-500 p-4 rounded-lg shadow w-full mb-4`}
        onPress={handleSubmit(handleSignIn)}
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
