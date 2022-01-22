import * as types from '../types';
import * as constants from '../../constants';

const initState = constants.INIT_STATE;

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_STAGE:
            return { ...state, stage: action.value }
        case types.SET_TYPE_OF_VISIT:
            return { ...state, typeOfVisit: action.value }
        case types.SET_VALUE:
            return { ...state, values: { ...state.values, [action.key]: action.value } }
        case types.SET_STEP:
            return { ...state, curStep: action.value }
        case types.SET_QUESTION_VALUE:
            return {
                ...state, values: {
                    ...state.values,
                    questionnaire: {
                        ...state.values.questionnaire,
                        [action.key]: action.value
                    }
                }
            }
        default:
            return state;
    }
}

export default rootReducer;