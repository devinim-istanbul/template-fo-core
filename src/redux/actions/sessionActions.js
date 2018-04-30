import { SESSION } from "../types";
import components from "../../components/platform";
import api from '../../api';

export const login = (user) => async dispatch => {
    const { PlatformStorage } = components;
    await PlatformStorage.setItem('@Template:user', JSON.stringify(user));
    dispatch({
        type: SESSION.LOGIN,
        payload: user
    });
};
