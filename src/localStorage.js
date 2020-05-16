const saveState = (key,state) => {
    //переводим объект в строку
    let  stateAString = JSON.stringify(state);
    //сохраняем нашу строку в localStorage под ключом "state"
    localStorage.setItem(key, stateAString);
};

const restoreState = (key,defaultState) => {
    //объявляем наш стейт стартовый
    let state = defaultState
    let stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) {
        state = JSON.parse(stateAsString);
    }
    this.setState(state, () => {
        this.state.todolists.forEach(tl => {
            if (tl.id >= this.newTodoId) {
                this.newTodoId = tl.id +1
            }
        })
    });
};