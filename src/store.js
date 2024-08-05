import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './pages/tasks/tasksSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
