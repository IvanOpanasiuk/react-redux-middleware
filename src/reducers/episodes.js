import {
    getSeriesRequest,
    getSeriesSuccess,
    getSeriesError
} from '../actionCreators/actions';

//selectors

export const getSeries = (state) => state.series;
export const getIsLoading = (state) => state.isLoading;
export const getError = (state) => state.error;

//initial state

const initialState = {
    series: [],
    isLoader: false,
    error: null
}

//reducer

export default (state = initialState, action) => {
    switch (action.type) {
        case getSeriesRequest.toString():
            return {
                ...state,
                series: [],
                isLoading: true
            };
        case getSeriesSuccess.toString():
            return {
                ...state,
                series: action.payload,
                isLoading: false
            };
        case getSeriesError.toString():
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }

        default:
            return state;
    }
}