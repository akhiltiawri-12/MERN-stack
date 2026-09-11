import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "../reducer/TodoSlice";

export const store  = configureStore({
    reducer:{
        todos: todoSlice,
    },
});

export default store;