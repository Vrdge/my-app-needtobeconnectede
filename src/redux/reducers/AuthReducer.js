import { Navigate } from "react-router-dom"
import { AuthAPI } from "../../API/API"

const SET_USER_DATA = "SET-USER-DATA"
const DEL_USER_DATA = "DEL-USER-DATA"
export const setAuthUserData = (email, id, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {
        email, id, login, isAuth
    }
})
export const delAuthUserData = () => ({
    type: DEL_USER_DATA,

})

export const isAuthThunkCreator = () => {
    return (async (dispatch) => {
        let response = await AuthAPI.me()
        if (response.data.resultCode === 0) {
            let { email, id, login } = response.data.data
            dispatch(setAuthUserData(email, id, login, true))
        }

    })
}
export const LoginThunkCreator = (email, password, rememberMe) => {
    return (async (dispatch) => {

        let response = await AuthAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(isAuthThunkCreator())

        }
    })
}
export const LogOutThunkCreator = () => {
    return (async (dispatch) => {

        let response = await AuthAPI.logOut()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}





let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
}


const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                    // isAuth: action.isAuth,
            }
        case DEL_USER_DATA:
            return {
                ...state,
                isAuth: false,
            }

        default:
            return state
    }
}
export default AuthReducer



