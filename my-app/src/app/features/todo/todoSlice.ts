import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos:[
  {id:1, name: "run"},
  {id:2, name: "code"},
  {id:1, name: "run1"},
  {id:2, name: "code1"},
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
    }
  },
});

export const { todoAdded } = todoSlice.actions;
export default todoSlice.reducer;