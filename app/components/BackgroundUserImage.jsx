import React       from 'react';
import {Component} from 'react';
import DefaultImage        from "../assets/images/default.svg";

import '../assets/css/BackgroundUserImage.scss';

class BackgroundUserImage extends Component {

    render() {
        let loaded = undefined !== this.props.user && null !== this.props.user;
        let imageNotNull = loaded && this.props.user.image !== null;
        let userImage = imageNotNull ? this.props.user.image : DefaultImage;

        return <div className="BackgroundUserImageContainer">
            <div className="BackgroundUserImage" style={{backgroundImage: 'url(' + userImage + ')'}}/>
        </div>;
    }

}

export default BackgroundUserImage;