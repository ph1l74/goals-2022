import * as types from '../types';


export const setStage = (value) => {
    return {
        type: types.SET_STAGE,
        value
    }
}

export const setTypeOfVisit = (value) => {
    return {
        type: types.SET_TYPE_OF_VISIT,
        value
    }
}


export const setValue = (key, value) => {
    return {
        type: types.SET_VALUE,
        value,
        key
    }
}


export const setQuestionValue = (key, value) => {
    return {
        type: types.SET_QUESTION_VALUE,
        value,
        key
    }
}
export const setStep = (value) => {
    return {
        type: types.SET_STEP,
        value
    }
}