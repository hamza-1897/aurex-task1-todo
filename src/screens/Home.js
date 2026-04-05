import { View, Text,FlatList } from 'react-native'
import { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import InputArea from '../components/Input';
import TodoItem from '../components/TaskItem';

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

// delete task function
const deleteLevel = (id) => {
 
  setTaskList(prev => prev.filter(t => t.id !== id));
};

// toggle complete function
const toggleComplete = (id) => {
  
  setTaskList(prev => prev.map(t => 
    t.id === id ? { ...t, completed: !t.completed } : t
  ));
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

