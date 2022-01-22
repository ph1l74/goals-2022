import * as types from '../types';


export const setCurrentCategory = (value) => {
    return {
        type: types.SET_CATEGORY,
        value
    }
}
