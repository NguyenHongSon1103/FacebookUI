<<<<<<< HEAD
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
=======
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
>>>>>>> 4ad1441af40fdf142dc00f07a9f35071934ddd80
};
