import { View, TextInput, TouchableOpacity, Text } from 'react-native';

const InputArea = () => {
  return (
    <View className="flex-row p-4 items-center space-x-2">
      <TextInput 
        className="flex-1 bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-base"
        placeholder="Add a new task..."
        placeholderTextColor="#9ca3af"
      />
      <TouchableOpacity 
        className="bg-blue-600 px-6 py-3 rounded-lg active:bg-blue-700"
      >
        <Text className="text-white font-semibold text-base">Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputArea;