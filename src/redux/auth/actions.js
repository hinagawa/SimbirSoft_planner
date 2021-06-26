import authService from "../../services/authService"
import { loginAction } from "./reducer";

export function login(email, password) {
    return async (dispatch) => {authService.login(email, password)
    .then(
        (user) => {
            dispatch(loginAction(user))
        }
    )
    .catch(
        (error) => {
            throw error;
        }
    )
    }
}

export function register(email, password) {
    return async (dispatch) => {authService.register(email, password)
    .then(
        (user) => {
            dispatch(loginAction(user))
        }
    )
    .catch(
        (error) => {
            throw error;
        }
    )
    }
}