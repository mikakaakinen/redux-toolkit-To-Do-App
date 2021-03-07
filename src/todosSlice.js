import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "a",
    task: "Learn React",
    complete: true,
  },
  {
    id: "b",
    task: "Learn Firebase",
    complete: false,
  },
  {
    id: "c",
    task: "Learn MongoDB",
    complete: false,
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action) {
      state.push(action.payload);
    },
    todoDeleted(state, action) {
      return (state = state.filter((todo) => todo.id !== action.payload));
    },
    todoUpdated(state, action) {
      const [id, todo] = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.task = todo;
      }
    },
    todoToggle(state, action) {
      const existingTodo = state.find((todo) => todo.id === action.payload);
      if (existingTodo) {
        existingTodo.complete = !existingTodo.complete;
      }
    },
  },
});

export const {
  todoAdded,
  todoDeleted,
  todoUpdated,
  todoToggle,
} = todosSlice.actions;
export default todosSlice.reducer;
