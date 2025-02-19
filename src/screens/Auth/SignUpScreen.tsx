import tw from 'twrnc';
import React, {useState} from 'react';
import * as yup from 'yup';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TextInput, Pressable, Alert} from 'react-native';
import {Eye, EyeOff} from 'lucide-react-native';

import {RootStackParamList, Screens} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAuthStore} from '../../store';
import {supabase} from '../../config/supabase';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

type RequireAuthNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const SignUpScreen = () => {
  const navigation = useNavigation<RequireAuthNavigationProp>();
  const {setUser} = useAuthStore();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const {error, data} = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      Alert.alert('Error', error.message);
    } else {
      Alert.alert('Success', 'You are registered successfully!');
      setUser(data.user!);

      navigation.popTo(Screens.Tabs);
    }
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-200 p-6 gap-2`}>
      <Text style={tw`text-2xl font-bold text-black mb-4`}>Sign Up</Text>

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

      <View style={tw`relative w-full`}>
        <Controller
          control={control}
          name="password"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={tw`bg-white p-4 rounded-lg border w-full ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Password"
              secureTextEntry={!showPassword}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
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

      <View style={tw`relative w-full`}>
        <Controller
          control={control}
          name="confirmPassword"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={tw`bg-white p-4 rounded-lg border w-full ${
                errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Confirm Password"
              secureTextEntry={!showConfirmPassword}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Pressable
          style={tw`absolute right-4 top-4`}
          onPress={() => setShowConfirmPassword(prev => !prev)}>
          {showConfirmPassword ? (
            <EyeOff size={20} color="gray" />
          ) : (
            <Eye size={20} color="gray" />
          )}
        </Pressable>
      </View>
      {errors.confirmPassword && (
        <Text style={tw`text-red-500`}>{errors.confirmPassword.message}</Text>
      )}

      <Pressable
        style={tw`bg-green-500 p-4 rounded-lg shadow mb-4 w-full`}
        onPress={handleSubmit(onSubmit)}>
        <Text style={tw`text-white text-lg text-center`}>Register</Text>
      </Pressable>
    </View>
  );
};
