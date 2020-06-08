export const SET_LOADING = 'SET_LOADING';

const initialState = {
    loading: false
}

const  loadingReducer = (state = initialState,action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.loading
            }
    }
    return state
}

export const loadingAC = (loading) => {
    return {
        type: SET_LOADING,
        loading
    }
}

export default loadingReducer