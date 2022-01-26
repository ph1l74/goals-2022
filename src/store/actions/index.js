import * as types from '../types';


export const setCurrentCategory = (value) => {
    return {
        type: types.SET_CATEGORY,
        value
    }
}

export const setLoading = (value) => {
    return {
        type: types.SET_IS_LOADING,
        value
    }
}

export const setDoc = (key, value) => {
    return {
        type: types.SET_DOC,
        value, key
    }
}


export const setData = (value) => {

    let parsedData = {};

    for (const doc of value) {
        parsedData = { ...parsedData, ...doc }
    }

    return {
        type: types.SET_DATA,
        value: parsedData
    }
}
