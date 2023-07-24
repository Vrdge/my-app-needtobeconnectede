// import React from "react"
// import classes from './Users.module.css'
// import axios from "axios";

// const Users = (props) => {
//     const image = "https://e1.pxfuel.com/desktop-wallpaper/214/623/desktop-wallpaper-dark-pfp-dark.jpg"

//     if (props.Users.Users.length === 0) {
//         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

//             props.setUsers(response.data.items)
//         })
//     }


//     let UserElements = props.Users.Users.map(u =>
//         <div key={u.id} className={classes.UsersPageWrapper}>
//             <div className={classes.UserWrapper}>
//                 <div className={classes.UserInfo}>
//                     <img className={classes.Pfp} src={u.photos.small !=null ?u.photos.small  : image /*&& u.gender === male? u.photos.male : u.photos.female*/} alt="" />
//                     <span><h2>{u.name}</h2></span>
//                     <span><h4>{u.UserName}</h4></span>
//                 </div>
//                 <div className={classes.UserActions}>
//                     {u.isFollow ? <button onClick={() => { props.unFollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
//                 </div>
//             </div>

//         </div>

//     )

//     return (

//         <div className={classes.Wrapper} color="white">
//             {UserElements}
//         </div>

//     );
// };































//     // let followState = (props) => {
//     //     switch (props.u.isFollow) {
//     //         case true: {

//     //             let text = "follow";
//     //             return (text)
//     //         };
//     //         case false: {
//     //             let text = "unfollow";
//     //             return (text)
//     //         }
//     //     }
//     // }
//     //     props.setUsers({
//     //     Users: [
//     //         { id: 1, name: "Lusine", UserName: "Lusine_Avetyan", isFollow: true, ProfileImage: "https://e1.pxfuel.com/desktop-wallpaper/214/623/desktop-wallpaper-dark-pfp-dark.jpg", },
//     //         { id: 2, name: "Lilit", UserName: "__meoowwn_", isFollow: false, ProfileImage: "https://i.pinimg.com/236x/7a/e4/0b/7ae40b3555f1fa483e7fd720a8a6c5f4.jpg" },
//     //         { id: 3, name: "Anahit", UserName: "ANtararanipu", isFollow: false, ProfileImage: 'https://i.pinimg.com/236x/9b/68/70/9b6870838d5bae737d2d73b71fb6af98.jpg' },
//     //         { id: 4, name: 'Narek', UserName: "esh", isFollow: true, ProfileImage: 'https://i.pinimg.com/originals/04/6f/d9/046fd9762b3ad35b7f3f5992eff5a852.jpg', },
//     //         { id: 5, name: 'Gev', UserName: "annasun", isFollow: true, ProfileImage: 'https://i.pinimg.com/originals/0f/f8/6e/0ff86e17a430270373e57e12c971a041.jpg', },
//     //     ]
//     // })
