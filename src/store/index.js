import {configureStore} from "@reduxjs/toolkit";
import todoItemsReducer from "./slices/todoItems";

export default configureStore({
    reducer: {
        todoItems: todoItemsReducer,
    },
})