import * as types from '../types';
import * as constants from '../../constants';

const initState = constants.initState;

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_CATEGORY:
            return { ...state, stage: action.value }
        default:
            return state;
    }
}

export default rootReducer;