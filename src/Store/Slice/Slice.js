// import { createSlice } from "@reduxjs/toolkit";

// let nextId = 1;

// const todoSlice = createSlice({
//   name: "todos",
//   initialState: [],
//   reducers: {
//     addTodo: (state, action) => {
//       state.push({ id: nextId++, text: action.payload });
//     },
//     removeTodo: (state, action) => {
//       return state.filter(todo => todo.id !== action.payload);
//     },
//     updateTodo: (state, action) => {
//       const { id, text } = action.payload;
//       const todo = state.find(t => t.id === id);
//       if (todo) {
//         todo.text = text;
//       }
//     }
//   }
// });

// export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
// export default todoSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTodos, addTodo, deleteTodo } from "../../../services/todoAPI";

// Async thunks for API calls
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  return await getTodos();
});

export const createTodo = createAsyncThunk("todos/createTodo", async (text) => {
  return await addTodo(text);
});

export const removeTodo = createAsyncThunk("todos/removeTodo", async (id) => {
  await deleteTodo(id);
  return id;
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      // Add
      .addCase(createTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // Delete
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((todo) => todo.id !== action.payload);
      });
  },
});

export default todoSlice.reducer;
