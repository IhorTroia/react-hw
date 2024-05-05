import {getData} from "./saveTodos";

const storageKey = 'form-data';

export const deleteSingleTodo = (id) => {
    const data = getData();
    const todos = data.filter((item) => id !== item.id);
    localStorage.setItem(storageKey, JSON.stringify(todos));
    return todos;
};