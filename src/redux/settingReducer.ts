import {api} from "../dal/api";
import {AppStateType} from "./store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

const SET_STYLE = 'SET_STYLE';
const SET_LOADING = 'SET_LOADING';
const SET_ACCESS = 'SET_ACCESS';
const TOGGLE_IN_PROGRESS = 'TOGGLE_IN_PROGRESS';
const SET_ERROR = 'SET_ERROR';
const SET_ANSWER = 'SET_ANSWER';


type ActionTypes = SetAnswerActionType |
    SetErrorActionType |
    SetInProggressActionType |
    SetAccessActionType |
    SetLoadingActionType |
    SetStyleActionType

type InitialStateType = {
    style:string
    loading:boolean
    success:boolean
    inProgress:boolean
    error:string
    answer:string
}

const initialState:InitialStateType = {
    style: '',
    loading: true,
    success: false,
    inProgress: false,
    error: '',
    answer: ''
};

const settingReducer = (state:InitialStateType=initialState,action:ActionTypes):InitialStateType => {
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
            };
        case SET_ACCESS:
            return {
                ...state,
                success: action.success
            };
        case TOGGLE_IN_PROGRESS:
            return {
                ...state,
                inProgress: action.inProgress
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            };
        case SET_ANSWER:
            return {
                ...state,
                answer: action.answer
            }
    }
    return state
};

type SetStyleActionType = {
    type: typeof SET_STYLE
    style:string
}

export const setStyle = (style:string):SetStyleActionType => {
    return {
        type: SET_STYLE,
        style
    }
};

type SetLoadingActionType = {
    type: typeof SET_LOADING
    loading:boolean
}

export const setLoading = (loading:boolean):SetLoadingActionType => {
    return {
        type: SET_LOADING,
        loading
    }
};

type SetAccessActionType = {
    type:typeof SET_ACCESS
    success:boolean
}

export const setAccess = (success:boolean):SetAccessActionType => {
    return {
        type: SET_ACCESS,
        success
    }
};

type SetInProggressActionType = {
    type: typeof TOGGLE_IN_PROGRESS
    inProgress:boolean
}

export const setInProgress = (inProgress:boolean):SetInProggressActionType => {
    return {
        type: TOGGLE_IN_PROGRESS,
        inProgress
    }
};

type SetErrorActionType = {
    type: typeof SET_ERROR
    error:string
}

export const setError = (error:string):SetErrorActionType => {
    return {
        type: SET_ERROR,
        error
    }
};

type SetAnswerActionType = {
    type: typeof SET_ANSWER
    answer:string
}

export const setAnswer = (answer:string):SetAnswerActionType => {
    return {
        type: SET_ANSWER,
        answer
    }
};



type ThunkType = ThunkAction<void,AppStateType,unknown,ActionTypes>

export const sendRequest = (success:boolean):ThunkType => (dispatch:ThunkDispatch<AppStateType,unknown,ActionTypes>) => {
    dispatch(setInProgress(true));
    api.responce(success)
        .then( response => {
            dispatch(setAnswer(response.data.errorText));
            dispatch(setInProgress(false));
            alert(response.data.errorText)
        })
        .catch(e => {
            dispatch(setError(e));
            alert(e)
        })
        .finally(() => dispatch(setInProgress(false)))
};




export default settingReducer;