import React, { useEffect } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import { Navigate } from "react-router-dom";
import { LoginThunkCreator } from "../../redux/reducers/AuthReducer";

const LoginContainer = (props) => {
    return (
        <Login {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        Auth: {...state.Auth},
    }
}
let mapDispatchToProps = {
    Login:LoginThunkCreator
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)