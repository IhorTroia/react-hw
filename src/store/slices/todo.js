import {createSlice} from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value: [],
    },
    reducers: {
        addTodo: (state, {payload}) => {
            const newTodo = {
                id: state.value.length ? state.value.at(-1).id + 1 : 1,
                title: payload.title,
                body: payload.body,
            };
            state.value.push(newTodo);
        },
        deleteTodo: (state, {payload}) => {
            state.value = state.value.filter((item) => item.id !== payload);
        },
        deleteAllTodo: (state) => {
            state.value = [];
        }
    }
})

export const { addTodo, deleteTodo, deleteAllTodo } = todoSlice.actions;

export default todoSlice.reducer;