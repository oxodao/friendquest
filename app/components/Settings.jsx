import React, {Component}  from 'react';
import {connect}           from "react-redux";
import BackgroundUserImage from "./BackgroundUserImage";
import NavBar              from './Navbar';

import '../assets/css/settings.scss';

class Settings extends Component {

    render() {
        return <div className="container">
            <BackgroundUserImage user={this.props.user}/>
            <div className="content">
                <h1>lololol Settings</h1>
            </div>
            <NavBar/>
        </div>;
    }

}


export default connect(
    state => ({
        user: state.tokenReducer.user
    }),
    dispatch => ({}),
)(Settings);