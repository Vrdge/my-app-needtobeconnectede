import { getProfileUserAPI, getStatusAPI, updateStatusAPI } from "../../API/ProfileAPI";

const ADD_POST = "Profile/ADD-POST";
const UPDATE_NEW_POST_TEXT = "Profile/UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "Profile/SET-USER-PROFILE"
const SET_STATUS = 'Profile/SET-STATUS'
// const UPDATE_STATUS = 'UPDATE-STATUS'


export const addPostActionCreator = (text) => ({
  type: ADD_POST,
  message:text
});

// export const onPostChangeActionCreator = (text) => ({
//   type: UPDATE_NEW_POST_TEXT,
//   newText: text,
// });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile: profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status: status,
});

let initialState = {
  Posts: [
    { id: 1, message: "owihf asdh erexaner" },
    { id: 2, message: "varam kereq kjsdhfjksd" },
    { id: 3, message: "akjfn jasjdjk axjikner" },
  ],
  profile:'',
  status: ""

}




export const getProfileUsersThunk = (userId) => async (dispatch)=>{
    let response = await getProfileUserAPI(userId)
          dispatch(setUserProfile(response))
  }

export const getStatusThunk = (userId) =>async(dispatch)=>{
  let response = await getStatusAPI(userId)
          dispatch(setStatus(response))
  }

export const updateStatusThunk = (status) =>async(dispatch)=>{
  let response = await updateStatusAPI(status)
      if(response.resultCode === 0){
          dispatch(setStatus(status))
        }
  }







const ProfileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        Posts: [...state.Posts, {  message: action.message }],
        
      }
    // case UPDATE_NEW_POST_TEXT: 
    //   return{
    //     ...state,
    //     newPostText:action.newText
    //     DO NOT NEED THIS WITH FORMIK
    //   }
      case SET_USER_PROFILE: 
      return{
        ...state,
        profile:action.profile
      }
      case SET_STATUS: 
      return{
        ...state,
        status:action.status
      }
    default:
      return state
  }
}
export default ProfileReducer