import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return { todos: [...state.todos, action.payload] };
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
