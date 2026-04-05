import { View, Text,FlatList } from 'react-native'
import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import InputArea from '../components/Input';

const Home = () => {

  //States initialize for task input and task list
  const [task, setTask] = useState(''); 
  const [taskList, setTaskList] = useState([]); 


  //Add Task Function
  const handleAddTask = () => {
    if (task.trim().length === 0) return;

    const newTask = {
      id: Date.now().toString(), 
      text: task,
      completed: false,
    };

    setTaskList([...taskList, newTask]); 
    setTask(''); 
  };
  return (
    <View>
        <Header />
        <InputArea 
        task={task} 
        setTask={setTask} 
        onAdd={handleAddTask}
        />

        <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-gray-100 p-4 mb-2 rounded-lg shadow-sm">
            
            <Text className="text-gray-800 text-lg">{item.text}</Text>
          
          </View>
        )}
      />
        <StatusBar style="auto" />

    </View>
  )
}

export default Home

