import { isAuthThunkCreator } from "./AuthReducer"

const INITIALIZED_SUCCES = "INITIALIZED-SUCCES"

export const initializedSucces = () => ({
    type: INITIALIZED_SUCCES,

})

export const initializeAppTC = () => async(dispatch) => {
    let promise = dispatch( isAuthThunkCreator())
    await Promise.all([promise])
        dispatch(initializedSucces())



}


let initialState = {
    initialize: false,
}


const AppReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCES:
            return {
                ...state,
                initialize: true
            }

        default:
            return state
    }
}
export default AppReducer



