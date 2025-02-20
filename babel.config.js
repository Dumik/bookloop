module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@config': './src/config',
          '@navigation': './src/navigation',
          '@store': './src/store',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
