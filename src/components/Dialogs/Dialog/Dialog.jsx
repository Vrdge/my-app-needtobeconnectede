import { NavLink } from 'react-router-dom';
import classes from './Dialog.module.css'
import React from 'react';


const Dialog = (props) => {

    return (
        <div className={classes.UserDialog}>
            <img src="https://www.heurekalabs.org/content/images/2022/03/originalApe6808-1.png" alt="" />
            <div className={classes.User}>
                <NavLink to={"dialogs/" + props.id} className={classes.userName}>{props.userName}</NavLink>
            
            </div>
        </div>
    )
}

export default Dialog