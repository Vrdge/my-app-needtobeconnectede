import { FollowAPI, unFollowAPI } from "../../API/UsersAPi/SubsAPI"
import {  getUsersAPI, setUsersAPI } from "../../API/UsersAPi/UsersAPI"
import { obobob } from "../../utils/helper/helper"

/*here need to replace*/
const FOLLOW = "Users/FOLLOW"
const UN_FOLLOW = "Users/UN-FOLLOW"
const SET_USERS = "Users/SET-USERS"
const SET_USERS_COUNT = "Users/SET-USERS-COUNT"
const SET_TOTAL_USERS_COUNT = "Users/SET-TOTAL-USERS-COUNT"
const IS_FETCHING = "Users/IS-FETCHING"
const FOLLOW_STATE_TOGGLE = "Users/FOLLOW-STATE-TOGGLE"

export const follow = (id, isFollow,) => ({
    type: FOLLOW,
    id: id,
    isFollow: isFollow,
})
export const unFollow = (id, isFollow,) => ({
    type: UN_FOLLOW,
    id: id,

    isFollow: isFollow,
})
export const setUsers = (Users) => ({
    type: SET_USERS,
    Users: Users
})
export const setCurrentPage = (currentPage) => ({
    type: SET_USERS_COUNT,
    currentPage: currentPage,

})
export const setTotalUsersCount = (totalCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount: totalCount,
})
export const isFetching = (isFetchingState) => ({
    type: IS_FETCHING,
    isFetchingState: isFetchingState,

})
export const FollowStateToggle = (isFetching, id) => ({
    type: FOLLOW_STATE_TOGGLE,
    isFetching: isFetching,
    id: id


})


export const getUsersThunkCreator = (currentPage, pageSize)=>async (dispatch) => {


        dispatch(isFetching(true))
         let response = await getUsersAPI(currentPage, pageSize);
            dispatch(setUsers(response.items))
            dispatch(setTotalUsersCount(response.totalCount))
            dispatch(isFetching(false))

    
}
export const setUsersThunkCreator = (pageNumber, pageSize)=>async (dispatch) => {

        dispatch(isFetching(true))
        let response = await setUsersAPI(pageNumber, pageSize)
            dispatch(setUsers(response.items))
            dispatch(isFetching(false))



}


const FollowUnfollowThunkCreator =async (id,apiMethod,AC,dispatch)=>{
    dispatch(FollowStateToggle(true,id))

    let response = await apiMethod(id)
        if (response.data.resultCode === 0) {
            dispatch(AC(id))
        }
        dispatch(FollowStateToggle(false, id))

}


export const unFollowThunkCreator = (id)=>async(dispatch) =>{
        let apiMethod = unFollowAPI
        let AC = unFollow
        FollowUnfollowThunkCreator(id,apiMethod,AC,dispatch)

}
export const followThunkCreator = (id)=>async(dispatch) =>{
        let apiMethod = FollowAPI
        let AC = follow
        FollowUnfollowThunkCreator(id,apiMethod,AC,dispatch)


}
let initialState = {
    Users: [


    ],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followState: [],
}


const UsersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW: {
            return {
                ...state,
                Users: obobob(state.Users, action.id,"id", {isFollow:true}),
            }

        }
    
        case UN_FOLLOW: {
            return {
                ...state,
                Users: obobob(state.Users, action.id,"id", {isFollow:false}),

            }
        }
        case SET_USERS: {
            
            return {
                ...state, Users: [...action.Users],
            }
        }
        case SET_USERS_COUNT: {
            return {
                ...state, currentPage: action.currentPage,
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.totalCount,
            }
        }
        case IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetchingState,
            }
        }
        case FOLLOW_STATE_TOGGLE: {
            return {
                ...state, followState: (action.isFetching
                    ? [...state.followState, action.id]
                    : state.followState.filter(id => id !== action.id))
            }
        }
        default:
            return state
    }
}
export default UsersReducer





// export const searchActionCreator = () => ({
//     type: SEARCH,
// });

// export const onSearchBarChangeActionCreator = (text) => ({
//     type: UPDATE_NEW_SEARCH_TEXT,
//     newText: text,
// });






// const SEARCH = "SEARCH";
// const UPDATE_NEW_SEARCH_TEXT = "UPDATE-NEW-SEARCH-TEXT";






        // case SEARCH:
        //     let stateCopy = { ...state }

        //     return stateCopy
        // case UPDATE_NEW_SEARCH_TEXT: {
        //     let stateCopy = { ...state }

        //     return stateCopy
        // }