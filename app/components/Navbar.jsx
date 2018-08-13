import {connect}              from "react-redux";
import React                  from 'react';
import {Component}            from 'react';
import BottomNavigation       from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GameIcon               from '@material-ui/icons/VideogameAsset';
import SettingsIcon           from '@material-ui/icons/SettingsApplications';
import {Link}                 from 'react-router-dom';

class Navbar extends Component {

    render() {
        return <BottomNavigation>
            <Link to="/"><BottomNavigationAction icon={<GameIcon/>}/></Link>
            <Link to="/settings"><BottomNavigationAction icon={<SettingsIcon/>}/></Link>
        </BottomNavigation>;
    }

}

export default connect()(Navbar);