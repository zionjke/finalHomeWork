export const saveState = (key,state) => {
    //переводим объект в строку
    let  stateAString = JSON.stringify(state);
    //сохраняем нашу строку в localStorage под ключом "state"
    localStorage.setItem(key, stateAString);
};

export const restoreState = (key,defaultState) => {
    let stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) {
        defaultState = JSON.parse(stateAsString);
    }
    return defaultState;
};
