const SET_STYLE = 'SET_STYLE';
const SET_LOADING = 'SET_LOADING';

const initialState = {
    style: null,
    loading: true
}

const settingReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_STYLE:
            return {
                ...state,
                style: action.style
            };

        case SET_LOADING:
            return {
                ...state,
                loading: action.loading
            }
    }
    return state
}

export const setStyle = (style) => {
    return {
        type: SET_STYLE,
        style
    }
}

export const setLoading = (loading) => {
    return {
        type: SET_LOADING,
        loading
    }
}

export default settingReducer;