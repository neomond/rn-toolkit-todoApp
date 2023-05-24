import {createSlice, PayloadAction, configureStore} from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type RootState = {
  todos: Todo[];
};

const initialState: RootState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(item => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const {addTodo, toggleTodo} = todoSlice.actions;

export const store = configureStore({
  reducer: todoSlice.reducer,
});

export default todoSlice.reducer;
