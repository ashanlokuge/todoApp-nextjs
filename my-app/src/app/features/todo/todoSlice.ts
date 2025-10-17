import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  todos:[
  {id:1, name: "run"},
  {id:2, name: "code"},
  {id:3, name: "run1"},
  {id:4, name: "code1"},
]
}

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    todoAdded: (state, action) =>{
      state.todos.push({
        id:Date.now(),
        name: action.payload.name,
      })
    },
    todoDeleted: (state,action)=>{
      state.todos = state.todos.filter((todo)=> todo.id !==action.payload)
    }
  },
});

export const { todoAdded, todoDeleted } = todoSlice.actions;
export default todoSlice.reducer;