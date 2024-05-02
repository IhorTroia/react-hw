const storageKey = 'form-data';

export const getData = () => {
    const localData = JSON.parse(localStorage.getItem(storageKey));
    return localData === null ? [] : localData;
}

export const getItemById = (id) => {
    const localData = getData();
    return localData.find(item => Number(item.id) === Number(id));
}

export const saveTodoItem = (data) => {
    const dataFromStorage = getData();
    const updatedData = {
        id: dataFromStorage.length ? dataFromStorage.at(-1).id + 1 : 1,
        ...data,
    }

    const dataToSave = [...structuredClone(getData()), updatedData];
    localStorage.setItem(storageKey, JSON.stringify(dataToSave));

    return updatedData;
}