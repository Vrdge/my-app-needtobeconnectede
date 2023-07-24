import { NavLink, Navigate } from 'react-router-dom';
import classes from './Sidebar.module.css'
import React from 'react';



const Sidebar = (props) => {
    return (
        <nav className={classes.sidebar}>
            <NavLink to={`/profile/${props.Auth.id}`} className={classes.link}>Profile</NavLink>
            <NavLink to='/dialogs' className={`${classes.link}`}>Messages</NavLink>
            <NavLink to='/publications' className={`${classes.link}`}>Publications</NavLink>
            <NavLink to='/users' className={`${classes.link}`}>Users</NavLink>
            <NavLink to='/settings' className={classes.link}>Settings</NavLink>
            <button  className={classes.button} onClick={() => {
                    props.LogOut()
            }}  >Log Out</button>



        </nav>
    )
}
export default Sidebar