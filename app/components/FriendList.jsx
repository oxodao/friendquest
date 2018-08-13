import React, {Component}  from 'react';
import {connect}           from "react-redux";
import NavBar              from './Navbar';

import '../assets/css/friendlist.scss';
import BackgroundUserImage from "./BackgroundUserImage";

class FriendList extends Component {

    render() {
        return <div className="container">
            <BackgroundUserImage user={this.props.user}/>
            <div className="content">
            </div>
            <NavBar/>
        </div>;
    }

}


export default connect(
    state => ({
        user: state.tokenReducer.user,
    }),
    dispatch => ({}),
)(FriendList);