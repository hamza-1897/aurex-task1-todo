import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@todo_tasks';

export const storageService = {
  // Save Tasks 
  saveTasks: async (tasks) => {
    try {
      const jsonValue = JSON.stringify(tasks);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      console.error("Error saving tasks:", e);
    }
  },

  // Load Tasks 
  loadTasks: async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      // Null handle 
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.error("Error loading tasks:", e);
      return [];
    }
  }
};