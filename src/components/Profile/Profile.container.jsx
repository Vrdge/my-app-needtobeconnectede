import Profile from "./Profile";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProfileUsersThunk, getStatusThunk, updateStatusThunk } from "../../redux/reducers/ProfileReducer";
import { useParams } from "react-router-dom";
import { WithoutRedirectComponent } from "../HOC/redirectComponent";
import { compose } from "redux";


const ProfileContainer = React.memo((props) => {
    let { userId } = useParams();
    let {getProfile,getStatus,} = props
    if (!userId || userId === null) {
        userId = 29401
    }
    useEffect(() => {
        getProfile(userId)
        getStatus(userId)
    }, [userId]);

    return (
        <Profile {...props} Profile={props.Profile} status={props.status} updateStatus={props.updateStatus} />

    )
})

let mapStateToProps = (state) => {
    return {
        Profile: state.ProfilePage.profile,
        status: state.ProfilePage.status

    }
}
let mapDispatchToProps = {
    getProfile: getProfileUsersThunk,
    getStatus: getStatusThunk,
    updateStatus: updateStatusThunk,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithoutRedirectComponent,
)(ProfileContainer)
