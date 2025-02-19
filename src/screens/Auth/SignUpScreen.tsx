import tw from 'twrnc';
import React from 'react';
import * as yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TextInput, Pressable, Alert} from 'react-native';

import {RootStackParamList, Screens} from '../../navigation/types';
import {supabase} from '../../config/supabase';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

type RequireAuthNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const SignUpScreen = () => {
  const navigation = useNavigation<RequireAuthNavigationProp>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    const {error} = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (error) {
      console.log(error);
      Alert.alert('Error', error.message);
    } else {
      Alert.alert('Success', 'You are registered successfully!');
      navigation.navigate(Screens.SignInScreen);
    }
  };

  const handleGoogleSignIn = async () => {};

  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-200 p-6 gap-2`}>
      <Text style={tw`text-2xl font-bold text-black mb-4`}>Sign Up</Text>

      <Controller
        control={control}
        name="name"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={tw`bg-white p-4 rounded-lg border w-full ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.name && (
        <Text style={tw`text-red-500`}>{errors.name.message}</Text>
      )}

      <Controller
        control={control}
        name="email"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={tw`bg-white p-4 rounded-lg border w-full ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="email-address"
          />
        )}
      />
      {errors.email && (
        <Text style={tw`text-red-500`}>{errors.email.message}</Text>
      )}

      <Controller
        control={control}
        name="password"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={tw`bg-white p-4 rounded-lg border w-full ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.password && (
        <Text style={tw`text-red-500`}>{errors.password.message}</Text>
      )}

      <Pressable
        style={tw`bg-green-500 p-4 rounded-lg shadow mb-4 w-full`}
        onPress={handleSubmit(onSubmit)}>
        <Text style={tw`text-white text-lg text-center`}>Register</Text>
      </Pressable>

      <Pressable
        style={tw`bg-white p-4 rounded-lg shadow mb-4 w-full`}
        onPress={handleGoogleSignIn}>
        <Text style={tw`text-black text-lg text-center`}>
          Sign in with Google
        </Text>
      </Pressable>
    </View>
  );
};
