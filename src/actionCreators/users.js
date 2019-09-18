// export const ADD_USER = "ADD_USER";
// export const REMOVE_ALL_USERS = 'REMOVE_ALL_USERS';

// export const addUser = (id, name) => {
//     return {
//         type: ADD_USER,
//         payload: { id, name }
//     }
// }

// export const removeUsers = () => ({
//     type: REMOVE_ALL_USERS
// })

import { createAction } from 'redux-actions';

export const addUser = createAction('ADD_USER');
export const removeUsers = createAction('REMOVE_ALL_USERS');