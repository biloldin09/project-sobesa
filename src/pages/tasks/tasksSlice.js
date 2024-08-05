import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, important: false });
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    toggleImportant: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.important = !task.important;
      }
    },
    editTask: (state, action) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
      }
    },
  },
});

export const { addTask, deleteTask, toggleImportant, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
