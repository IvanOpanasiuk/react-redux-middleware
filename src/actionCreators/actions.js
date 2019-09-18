import { createAction } from 'redux-actions';

export const getSeriesRequest = createAction('GET_SERIES_REQUEST');
export const getSeriesSuccess = createAction('GET_SERIES_SUCCESS');
export const getSeriesError = createAction('GET_SERIES_ERROR');