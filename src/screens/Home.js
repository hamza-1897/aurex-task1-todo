import { View, Text,FlatList } from 'react-native'
import { useState , useEffect } from 'react';
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import InputArea from '../components/Input';
import TodoItem from '../components/TaskItem';
import { storageService } from '../services/storageService';

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
          <TodoItem 
            item={item} 
            onDelete={deleteLevel} 
            onToggle={toggleComplete}
          />
        )}
      />



        <StatusBar style="auto" />

    </View>
  )
}

export default Home

