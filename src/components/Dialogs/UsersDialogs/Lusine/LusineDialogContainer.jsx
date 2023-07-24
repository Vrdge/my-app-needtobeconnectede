import { connect } from 'react-redux';
import { addMessageActionCreator } from '../../../../redux/reducers/DialogsReducer';
import LusineDialog from './LusineDialog';



// const LusineDialogContainer = (props) => {

//     const onMessageChange = (text) =>{
//         props.dispatch(onMessageChangeActionCreator(text))
//     }
//     let sendMessage = (text,id) => {
//         props.dispatch(addMessageActionCreator(text, id))

//     }
//     return (
//         <LusineDialog onMessageChange ={onMessageChange} sendMessage = {sendMessage} DialogsPage = {props.DialogsPage}  />

//     )
// }
let mapStateToProps = (state) => {
    return {
        DialogsPage: state.DialogsPage,
        newPostText:state.DialogsPage.LusinenewMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text, id) => {
            dispatch(addMessageActionCreator(text, id))

        },
        // onMessageChange: (text) => {
        //     dispatch(onMessageChangeActionCreator(text))
            // no need for firmiik
        // }
    }
}


const LusineDialogContainer = connect(mapStateToProps, mapDispatchToProps)(LusineDialog)



export default LusineDialogContainer