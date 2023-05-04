import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    tasks: [
      {
        id: Date.now() - 1,
        text: 'test text',
        isDone: true,
      },
    ],
  },
  reducers: {
    addTask(state, action) {
      const {payload:{text}} = action;
      state.tasks.push({
        id: Date.now(),
        text,
        isDone: false,
      });
    },
    removeTask(state, action) {
      const {payload:{id}} = action;
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    setDoneTask(state, action) {
      const {payload:{id}} = action;
      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      );
    },
  },
});

export const {addTask, removeTask, setDoneTask} = todoSlice.actions;
export default todoSlice.reducer;
