import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: nanoid(),
                text: action.payload.text,
                completed: false,
            });
        },
    },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;