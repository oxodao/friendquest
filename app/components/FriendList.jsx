import React, {Component} from 'react';
import {connect}          from "react-redux";

import '../assets/css/friendlist.scss';
import BackgroundUserImage from "./BackgroundUserImage";

class FriendList extends Component {

    render() {
        return <div className="container">
            <BackgroundUserImage user={this.props.user}/>
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