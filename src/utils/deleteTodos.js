import {storageKey} from "./saveTodos";
import {getData} from "./saveTodos";

export const deleteAllTodoItems = () => {
    localStorage.removeItem(storageKey);
}

export const deleteSingleTodo = (id) => {
    const dataFromStorage = getData();
    const updatedData = dataFromStorage.filter((item) => id !== item.id);
    localStorage.setItem(storageKey, JSON.stringify(updatedData));
    return updatedData;
};
