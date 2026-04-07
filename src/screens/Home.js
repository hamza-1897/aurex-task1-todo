import { View, Text,FlatList } from 'react-native'
import { useState , useEffect } from 'react';
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import InputArea from '../components/Input';
import TodoItem from '../components/TaskItem';
import { storageService } from '../services/storageService';
import { Ionicons } from '@expo/vector-icons';

const Home = () => {

  //States initialize for task input and task list
  const [task, setTask] = useState(''); 
  const [taskList, setTaskList] = useState([]); 

// Load tasks from storage 
useEffect(() => {
  const fetchTasks = async () => {
    const storedTasks = await storageService.loadTasks();
    setTaskList(storedTasks);
  };
  fetchTasks();
}, []);

  //Add Task Function
  const handleAddTask = async () => {
    if (task.trim().length === 0) return;

    const newTask = {
      id: Date.now().toString(), 
      text: task,
      completed: false,
    };

   const newList = [...taskList, newTask];
  setTaskList(newList);
  setTask('');
    await storageService.saveTasks(newList);
  };

// delete task function
const deleteLevel = async (id) => {
 
  const newList = taskList.filter(item => item.id !== id);
  setTaskList(newList);
  await storageService.saveTasks(newList);
};

// toggle complete function
const toggleComplete = async (id) => {
  
 const newList = taskList.map(item => 
    item.id === id ? { ...item, completed: !item.completed } : item
  );
  setTaskList(newList);
  await storageService.saveTasks(newList);
};

  return (
    <View className="flex-1 bg-white">
        <Header />
        <InputArea 
        task={task} 
        setTask={setTask} 
        onAdd={handleAddTask}
        />

{(!taskList || taskList.length === 0) ? (
  // Empty State 
   <View className="flex-1 justify-center items-center  px-10">
    <Ionicons name="clipboard-outline" size={80} color="#0b53c0" />
    <Text className="text-gray-500 text-lg text-center mt-4 font-medium">
      No tasks available. Add your first task!
    </Text>
  </View>
       
 
) : (

    <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem 
            item={item} 
            onDelete={deleteLevel} 
            onToggle={toggleComplete}
          />
        )}
      />
      )}


        <StatusBar style="auto" />

    </View>
  )
}

export default Home

