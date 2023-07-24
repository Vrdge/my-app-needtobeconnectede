import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { compose } from "redux";
import { Provider, connect } from "react-redux";
import { initializeAppTC } from "./redux/reducers/AppReducer";
import Preloader from './components/Users/826.gif'
import withRouter from "./components/HOC/redirectComponent";
import store from "./redux/redux-store";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/Profile.container"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));


const App = (props) => {
  useEffect(() => {
    props.initializeApp()
  }, [])
  if (props.initialize) {

    return (
      <div className="app_wrapper">
        <SidebarContainer />
        <div className="app_wrapper_content">
          <Suspense fallback = {<img className='glglglgl' src={Preloader} />}>
            <Routes>
              <Route path={"dialogs/*"} element={<DialogsContainer />}></Route>
              <Route path={'profile/'} element={<ProfileContainer />} />
              <Route path={'profile/:userId?'} element={<ProfileContainer />} />
              <Route path={"/users/*"} element={<UsersContainer />}></Route>
              <Route path={"/login"} element={<LoginContainer />} />

            </Routes>
          </Suspense>
        </div>
      </div>

    )
  }
};

let mapStateToProps = (state) => {

  return {
    initialize: state.App.initialize,
    Auth: state.Auth
  }
}
let mapDispatchToProps = {
  initializeApp: initializeAppTC
}

export const AppContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
  // WithoutRedirectComponentperesnotation
)(App)

let MainApp = () => {
  return <BrowserRouter>
    <Provider store={store} >
      <AppContainer />
    </Provider>
  </BrowserRouter>

}
export default MainApp

