import classes from './Users.module.css'
import Preloader from './826.gif'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Users = (props) => {
    const image = "https://e1.pxfuel.com/desktop-wallpaper/214/623/desktop-wallpaper-dark-pfp-dark.jpg"
    let UserElements = props.Users.Users.map(u => {
        return <div key={u.id} className={classes.UsersPageWrapper}>
            <div className={classes.UserWrapper}>
                <div className={classes.UserInfo}>



                    {props.Users.isFetching ?
                        <img src={Preloader} alt="" />
                        :
                        <NavLink to={'/profile/' + u.id}>
                            <img className={classes.Pfp} src={u.photos.small != null ? u.photos.small : image /*&& u.gender === male? u.photos.male : u.photos.female*/} alt="" />
                        </NavLink>}





                    <span><h2>{u.name}</h2></span>
                    <span><h4>{u.UserName}</h4></span>
                </div>
                <div className={classes.UserActions}>

                    {u.isFollow
                        ? <button disabled={props.followState.includes(u.id)} onClick={() => {
                            props.unFollowTC(u.id);

                        }}>Unfollow</button>

                        : <button disabled={props.followState.includes(u.id)} onClick={() => {
                            props.FollowTC(u.id);

                        }}>follow</button>}
                </div>
            </div>
        </div>;
    }
    )
    let pagesCount = Math.ceil(props.Users.totalUsersCount / props.Users.pageSize)
    console.log(pagesCount) 
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        
    }
    let portionSize = 10
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;




    let PagesElements = pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => <span key={p}><button onClick={() => { props.onPageChanged(p) }} className={`${props.Users.currentPage === p && classes.selectedPage}`}>{p}</button></span>)
    return (

        <div className={classes.Wrapper} color="white">
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
            {PagesElements}
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}

            {UserElements}
        </div>

    );
}
export default Users