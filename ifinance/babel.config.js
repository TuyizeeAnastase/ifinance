module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      // ... other Babel plugins
      'react-native-reanimated/plugin',
    ],
  };
};
