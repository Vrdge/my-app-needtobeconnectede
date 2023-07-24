import { connect } from "react-redux"
import Dialogs from "./Dialogs"
import { WithoutRedirectComponent } from "../HOC/redirectComponent"
import { compose } from "redux"



let mapStateToProps = (state) => {
    return {
        DialogsPage: state.DialogsPage,
    }
}

 


const DialogsContainer = compose(
    connect(mapStateToProps),
    WithoutRedirectComponent
    )(Dialogs)


export default DialogsContainer