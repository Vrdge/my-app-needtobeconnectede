import { Formik } from 'formik';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../../../redux/reducers/DialogsReducer';
import classes from './LusineDialogs.module.css'
import React from 'react';



const LusineDialog = (props) => {
    let MessagesElements = props.DialogsPage.LusineMessages.map(message => message.message)
    let sendMessage = (text,id) => {
        props.sendMessage({text,id})
    }
    return (
        <div className={classes.MessagesWrapper} >
            <div className={classes.Messages}>
                {MessagesElements}
            </div>
                {/* <input onChange={onMessageChange} ref={abs} value={newMessageText} type="text" name="" id="" />
                <button onClick={sendMessage}> Send Message to Lusine</button> */}
                <Formik Formik
                initialValues={{ newMessageText: '', }}
                onSubmit={(values, { setSubmitting },) => {
                    return (
                            sendMessage(values.newMessageText),
                            values.newMessageText = '',
                            setSubmitting(false)

                    )
                }}
            >
                {({

                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}
                    >
                                    <div className={classes.input}>

                        <input
                            onChange={handleChange}
                            type="text"
                            name="newMessageText"
                            onBlur={handleBlur}
                            value={values.newMessageText}
                        />

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                        </div >

                    </form>
                )}
            </Formik>
            </div>

    )
}
export default LusineDialog