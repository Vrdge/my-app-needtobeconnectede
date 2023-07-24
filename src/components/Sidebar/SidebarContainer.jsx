import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import { LogOutThunkCreator } from "../../redux/reducers/AuthReducer";
import { compose } from "redux";
import { WithoutRedirectComponent } from "../HOC/redirectComponent";


const SidebarContainer = (props) => {

    return (
        <Sidebar {...props} />

    )
}

let mapStateToProps = (state) => {
    return {
        Auth: { ...state.Auth },
    }
}
let mapDispatchToProps = {
    LogOut: LogOutThunkCreator,
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithoutRedirectComponent
)(SidebarContainer)

