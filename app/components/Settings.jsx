import React, {Component} from 'react';
import {connect}          from "react-redux";

import '../assets/css/settings.scss';

class Settings extends Component {

    render() {
        return <div id="Settings">
            <h1>lololol Settings</h1>
        </div>;
    }

}


export default connect(
    state => ({
    }),
    dispatch => ({}),
)(Settings);