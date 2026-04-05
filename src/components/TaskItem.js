
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const TodoItem = ({ item, onDelete, onToggle }) => {
  return (
    <View className="flex-row items-center bg-white p-4 mx-4 mb-3 rounded-xl shadow-sm border border-gray-100">
      
    
      <TouchableOpacity 
        onPress={() => onToggle(item.id)}
        className={`w-6 h-6 rounded-full border-2 items-center justify-center ${item.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}
      >
        {item.completed && <Ionicons name="checkmark" size={16} color="white" />}
      </TouchableOpacity>

           <View className="flex-1 ml-3">
        <Text 
          className={`text-base font-medium ${item.completed ? 'line-through text-gray-400 italic' : 'text-gray-800'}`}
        >
          {item.text}
        </Text>
      </View>

     
      <TouchableOpacity 
        onPress={() => onDelete(item.id)}
        className="p-2 active:opacity-50"
      >
        <Ionicons name="trash-outline" size={22} color="#ef4444" />
      </TouchableOpacity>
      
    </View>
  );
};

export default TodoItem;