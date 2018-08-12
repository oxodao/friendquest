import React, {Component} from 'react';
import {connect}          from "react-redux";

import '../assets/css/friendlist.scss';

class FriendList extends Component {

    render() {
        return <div id="FriendMenu">
            <h1>lololol friends</h1>
        </div>;
    }

}


export default connect(
    state => ({
    }),
    dispatch => ({}),
)(FriendList);