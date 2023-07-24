import classes from './LilitDialog.module.css'
import React from 'react';



const LilitDialog = (props) => {
    let MessagesElements = props.DialogsPage.LilitMessages.map(message => message.message)
    let newMessageText = props.DialogsPage.LilitnewMessageText
    return (
        <div className={classes.MessagesWrapper} >
            <div className={classes.Messages}>
                {MessagesElements}
            </div>
            <div className={classes.input}>
                <input value={newMessageText} type="text" name="" id="" />
                <button>Send Message to Lilit</button>
            </div>
        </div >

    )
}
export default LilitDialog