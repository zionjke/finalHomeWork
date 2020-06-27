import {api} from "../dal/api";

const SET_STYLE = 'SET_STYLE';
const SET_LOADING = 'SET_LOADING';
const SET_ACCESS = 'SET_ACCESS'
const TOGGLE_IN_PROGRESS = 'TOGGLE_IN_PROGRESS'
const SET_ERROR = 'SET_ERROR';
const SET_ANSWER = 'SET_ANSWER'

const initialState = {
    style: null,
    loading: true,
    success: false,
    inProgress: null,
    error: '',
    answer: ''
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
        case SET_ACCESS:
            return {
                ...state,
                success: action.success
            }
        case TOGGLE_IN_PROGRESS:
            return {
                ...state,
                inProgress: action.inProgress
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        case SET_ANSWER:
            return {
                ...state,
                answer: action.answer
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

export const setAccess = (success) => {
    return {
        type: SET_ACCESS,
        success
    }
}

export const setInProgress = (inProgress) => {
    return {
        type: TOGGLE_IN_PROGRESS,
        inProgress
    }
}

export const setError = (error) => {
    return {
        type: SET_ERROR,
        error
    }
}

export const setAnswer = (answer) => {
    return {
        type: SET_ANSWER,
        answer
    }
}

export const sendRequest = (success) => (dispatch) => {
    dispatch(setInProgress(true));
    api.responce(success)
        .then( res => {
            dispatch(setAnswer(res))
            dispatch(setInProgress(false))
            alert(res.errorText)
        })
        .catch(e => {
            dispatch(setError(e))
            alert(e)
        })
        .finally(() => dispatch(setInProgress(false)))
}




export default settingReducer;