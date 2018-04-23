import { SESSION } from "../types";

export const login = (user, asyncstore) => async dispatch => {
    await asyncstore.setItem('@ServeMe:user', JSON.stringify(user));
    dispatch({
        type: SESSION.LOGIN,
        payload: user
    });
};
