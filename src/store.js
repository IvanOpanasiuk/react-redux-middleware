import { createStore, compose, applyMiddleware } from 'redux';
import { tvMazeMiddleware } from './middleware';

import reduser from './reducers/episodes';

const createAppStore = () => {
    const store = createStore(
        reduser,
        compose(
            applyMiddleware(tvMazeMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
    return store;
}

export default createAppStore;