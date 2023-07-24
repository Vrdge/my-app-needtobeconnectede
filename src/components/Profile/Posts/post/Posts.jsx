import React from 'react';
import classes from './Posts.module.css'
const Post = (props) => {
    return (
            <div className={classes.item}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png" alt="" />
                {props.post}
                            </div>

    )
}
export default Post