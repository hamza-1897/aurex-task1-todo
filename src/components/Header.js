import { View, Text } from 'react-native';

const Header = () => {
  return (
    <View className="bg-blue-600 pt-14 pb-6 px-4 shadow-md">
      <Text className="text-white text-2xl font-bold text-center">
        Todo App
      </Text>
    </View>
  );
};

export default Header;