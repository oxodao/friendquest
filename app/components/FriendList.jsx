import React, {Component} from 'react';
import {connect}          from "react-redux";

import DefaultImage from "../assets/images/default.svg";
import '../assets/css/friendlist.scss';

class FriendList extends Component {

    render() {
        let logged    = this.props.user !== null;
        let userImage = logged ? this.props.user.image : DefaultImage;

        return <div id="FriendMenu">
            <div id="FriendBgContainer"><div id="FriendBg" style={{ backgroundImage: 'url(' + userImage + ')'}}></div></div>
            <h1>lololol friends</h1>
        </div>;
    }

}


export default connect(
    state => ({
        user: state.tokenReducer.user,
    }),
    dispatch => ({}),
)(FriendList);