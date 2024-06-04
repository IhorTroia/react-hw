import {createSlice} from "@reduxjs/toolkit";

export const todoItemsSlice = createSlice({
    name: 'todoItems',
    initialState: {
        data: [],
    },
    reducers: {
        addTodoItem: (state, {payload}) => {
            const newTodoItem = {
                id: state.data.length ? state.data.at(-1).id + 1 : 1,
                title: payload.title,
                body: payload.body,
            }
            state.data.push(newTodoItem);
        },
        deleteTodoItem: (state, {payload}) => {
            state.data = state.data.filter(item => item.id !== payload)
        },
        deleteAllTodoItems: state => {
            state.data = [];
        }
    }
})

export const {
    addTodoItem,
    deleteTodoItem,
    deleteAllTodoItems
} = todoItemsSlice.actions;

export default todoItemsSlice.reducer;