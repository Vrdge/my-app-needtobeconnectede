import AuthReducer, { setAuthUserData } from "../reducers/AuthReducer"

it("AUthReducerREturnsTrueOrFalse", () => {
    let action = setAuthUserData()
    let state = {
      email: null,
      id: null,
      login: null,
      isAuth: null,   
     }
    
    
    let newState = AuthReducer(state, action)
 
    expect(newState.email).toBe(undefined)
    expect(newState.id).toBe(undefined)
    expect(newState.login).toBe(undefined)
    expect(newState.isAuth).toBeUndefined()


})
