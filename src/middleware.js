import {
    getSeriesRequest,
    getSeriesSuccess,
    getSeriesError
} from './actionCreators/actions';

export const tvMazeMiddleware = store => next => action => {
    if (action.type === getSeriesRequest.toString()) {
        fetch('http://api.tvmaze.com/shows/180/episodes', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                store.dispatch(getSeriesSuccess(data))
            })
            .catch(error => {
                store.dispatch(getSeriesError(error))
            })
    }
    return next(action);
}