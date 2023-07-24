import MyPostsContainer from './Posts/myPostsContainer';
import classes from './Profile.module.css'
import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileStatus from './ProfileInfo/ProfileStatus';
const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo Profile = {props.Profile}/>
            <ProfileStatus Profile = {props.Profile} status = {props.status} updateStatus = {props.updateStatus} />
            <MyPostsContainer/>
        </div>

    )
}
export default Profile