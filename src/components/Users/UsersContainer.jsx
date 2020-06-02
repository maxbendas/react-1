import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {requestUsers, toggleFollowingProgress, follow, unfollow, setCurrentPage} from '../../redux/users-reducer';
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from '../../redux/users-selectors';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader.jsx';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber)=> {
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               users={this.props.users}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               onPageChanged={this.onPageChanged}
               followingInProgress={this.props.followingInProgress}

        />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
//let mapStateToProps = (state) => {
//    return {
//        users: state.usersPage.users,
//        pageSize: state.usersPage.pageSize,
//        totalUsersCount: state.usersPage.totalUsersCount,
//        currentPage: state.usersPage.currentPage,
//        isFetching: state.usersPage.isFetching,
//        followingInProgress: state.usersPage.followingInProgress,
//    }
//}


export default compose(
    connect(mapStateToProps,
        {follow, unfollow,setCurrentPage,toggleFollowingProgress,requestUsers})
)(UsersContainer);