const storageKey = 'form-data';

export const deleteItem = (id) => {
    const data = JSON.parse(localStorage.getItem(storageKey));
    const currentItemIndex = data.findIndex(todoItem => todoItem.id === +id);

    data.splice(currentItemIndex, 1);

    localStorage.setItem(
        storageKey,
        JSON.stringify(data)
    )
}