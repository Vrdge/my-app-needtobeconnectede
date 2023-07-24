import React from 'react';

import { addPostActionCreator } from '../../../redux/reducers/ProfileReducer';
import { onPostChangeActionCreator } from '../../../redux/reducers/ProfileReducer';
import MyPosts from './myPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {
//     let ProfilePage = props.ProfilePage
//     let dispatch = props.dispatch
//     let addPost = (text) => {
//         dispatch(addPostActionCreator(text));
//     }
//     let onPostChange = (text) => {
//         dispatch(onPostChangeActionCreator(text))

//     }
//     return (
//         <MyPosts addNewPost={addPost} updateNewPostMessage={onPostChange} ProfilePage={ProfilePage}
//         />
//     )
// }




let mapStateToProps = (state) => {
    return {
        ProfilePage: state.ProfilePage,
        newPostText: state.ProfilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (text) => {
            dispatch(addPostActionCreator(text));

        },
        // updateNewPostMessage: (text) => {
        //     dispatch(onPostChangeActionCreator(text))
        // DO NOT NEED THIS WITH FORMIK
        // }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer