const INCREMENT = 'INCREMENT';
const RESET = 'RESET';
const CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE';
const CHANGE_START_VALUE = 'CHANGE_START_VALUE';
const SET_NEW_VALUE = 'SET_NEW_VALUE'


const initialState = {
    startValue: 0,
    maxValue:5,
    counter: 0,
    setButtonDisabled: true,
    errorCounterValue: 'error',
    setCounterValue: 'press set'
};

const counterReducer = (state = initialState,action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case RESET:
            return {
                ...state,
                counter: state.startValue
            };
        case CHANGE_MAX_VALUE:
            if(action.newMaxValue < 0 || action.newMaxValue <= state.startValue || state.startValue < 0) {
                return {
                    ...state,
                    counter: state.errorCounterValue,
                    maxValue: Number(action.newMaxValue),
                    setButtonDisabled: true,
                }
            } else {
                return {
                    ...state,
                    counter: state.setCounterValue,
                    maxValue: Number(action.newMaxValue),
                    setButtonDisabled: false,
                }
            }
        case CHANGE_START_VALUE:
            if(action.newStartValue < 0 || action.newStartValue >= state.maxValue) {
                return {
                    ...state,
                    counter: state.errorCounterValue,
                    startValue: Number(action.newStartValue),
                    setButtonDisabled: true
                }
            } else {
                return {
                    ...state,
                    counter: state.setCounterValue,
                    startValue: Number(action.newStartValue),
                    setButtonDisabled: false
                }
            }
        case SET_NEW_VALUE:
            return {
                ...state,
                counter: state.startValue,
                setButtonDisabled: true
            }
    }
    return state
}

export const incrementAC = () => {
    return {
        type: INCREMENT
    }
}

export const resetAC = () => {
    return {
        type: RESET
    }
}

export const maxValueAC = (newMaxValue) => {
    return {
        type: CHANGE_MAX_VALUE,
        newMaxValue
    }
}

export const startValueAC = (newStartValue) => {
    return {
        type: CHANGE_START_VALUE,
        newStartValue
    }
}

export const setValueAC = () => {
    return {
        type: SET_NEW_VALUE,

    }
}

export default counterReducer
