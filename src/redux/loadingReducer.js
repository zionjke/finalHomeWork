export const SET_LOADING = 'SET_LOADING';

const initialState = {
    loading: true
}

const  loadingReducer = (state = initialState,action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: false
            }
    }
    return state
}

export const loadingAC = () => {
    return {
        type: SET_LOADING
    }
}

export default loadingReducer