const storageKey = 'form-data';

export const clearData = () => {
    localStorage.removeItem(storageKey);
}