import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, isFetching, setTotalUsersCount, setUsers, unFollow, FollowStateToggle, getUsersThunkCreator, followThunkCreator, unFollowThunkCreator, setUsersThunkCreator, } from '../../redux/reducers/UsersReducer';
import Users from './Users';
import { compose } from 'redux';
import { WithoutRedirectComponent } from '../HOC/redirectComponent';

const UsersContainer = React.memo((props)=> {
    let {getUsers,setUsers,setCurrentPage,currentPage,pageSize, } = props;
    useEffect(()=> {
        getUsers(currentPage, pageSize);
    },[])
    let onPageChanged = (pageNumber) => {
        
        setUsers(pageNumber, pageSize);
        setCurrentPage(pageNumber)
    }
        return (
            <div>

                <Users FollowTC={props.FollowTC}
                    unFollowTC={props.unFollowTC}
                    followState={props.followState}
                    Users={props.Users}
                    currentPage={props.currentPage}
                    totalUsersCount={props.Users.totalUsersCount}
                    pageSize={props.Users.pageSize}
                    onPageChanged={onPageChanged} />

            </div>)
    })



let mapStateToProps = (state) => {

    return ({
        Users: state.Users,
        totalUsersCount: state.Users.totalUsersCount,
        pageSize: state.Users.pageSize,
        currentPage: state.Users.currentPage,
        isFetching: state.Users.isFetching,
        followState: state.Users.followState
    })
}
let mapDispatchToProps = {
    /*action creators*/
    follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, isFetching, FollowStateToggle,setUsers: setUsersThunkCreator, getUsers: getUsersThunkCreator, FollowTC: followThunkCreator, unFollowTC: unFollowThunkCreator
}

export default compose(
connect(mapStateToProps, mapDispatchToProps),
WithoutRedirectComponent
)(UsersContainer)


