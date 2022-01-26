import * as types from '../types';
import * as constants from '../../constants';

const initState = constants.initState;

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_CATEGORY:
            return { ...state, currentCategory: action.value }
        case types.SET_IS_LOADING:
            return { ...state, isLoading: action.value }
        case types.SET_DATA:
            return { ...state, data: action.value }
        case types.SET_DOC:
            return { ...state, data: { ...state.data, [action.key]: action.value } }
        default:
            return state;
    }
}

export default rootReducer;