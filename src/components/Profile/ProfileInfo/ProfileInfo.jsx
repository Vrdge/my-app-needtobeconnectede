import React from "react"
import Preloader from './../../Users/826.gif'
const image = "https://e1.pxfuel.com/desktop-wallpaper/214/623/desktop-wallpaper-dark-pfp-dark.jpg"

const ProfileInfo = (props) => {

    return (
        (!props.Profile ? <img src={Preloader} alt="" /> :
            (
                !props.Profile.photos.small ?
                    <div>
                        <img width='100px' height='100px' src={image}></img>
                        <h1 color="white">{props.Profile.UserName}</h1>
                    </div> :
                    < div >
                        <img src={props.Profile.photos.small} alt="" />
                        <h1 color="white">{props.Profile.UserName}</h1>
                    </div >
            )
        )
    )
}
export default ProfileInfo