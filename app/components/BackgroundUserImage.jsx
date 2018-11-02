import React          from 'react';
import { Component }  from 'react';
import * as PropTypes from 'prop-types';

import '../assets/css/BackgroundUserImage.scss';
import { imageURL }   from "../config";

class BackgroundUserImage extends Component {

    render() {
        let loaded = undefined !== this.props.user && null !== this.props.user;
        let image  = loaded ? imageURL + this.props.user.username + ".png" : "";

        return <div className="BackgroundUserImageContainer">
            <div className="BackgroundUserImage" style={{ backgroundImage: 'url(' + image + ')' }}/>
        </div>;
    }

}

BackgroundUserImage.propTypes = {
    user: PropTypes.object.isRequired,
};

export default BackgroundUserImage;