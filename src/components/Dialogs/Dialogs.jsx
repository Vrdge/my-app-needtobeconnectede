import { Route, Routes } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import classes from './Dialogs.module.css'
import React from 'react';
import LilitDialog from './UsersDialogs/Lilit/LilitDialogs';
import LusineDialogContainer from './UsersDialogs/Lusine/LusineDialogContainer';



const Dialogs = (props) => {
    let DialogsELements = props.DialogsPage.Users.map(user => <Dialog key = {user.id} userName={user.name} id={user.id} />)
    
    return (
        <div className={classes.Dialogs_container}>
            <div className={classes.Dialogs}>
                {DialogsELements}
            </div>
            <div className={classes.Dialog}>
                <Routes>
                    <Route  element={<LilitDialog dispatch = {props.dispatch}  DialogsPage = {props.DialogsPage} />} path='/dialogs/1'></Route>
                    <Route  element={<LusineDialogContainer  />}path='/dialogs/2'></Route>
                </Routes>
            </div>
        </div>

    )
}
export default Dialogs
