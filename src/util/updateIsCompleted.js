import {getData} from "./saveTodos";

const storageKey = 'form-data';

export const updateIsCompletedStatus = (index) => {
    const dataFromStorage = getData();
    dataFromStorage[index].isCompleted = !dataFromStorage[index].isCompleted;
    localStorage.setItem(storageKey, JSON.stringify(dataFromStorage));
};