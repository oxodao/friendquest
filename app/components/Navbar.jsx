import {connect}              from "react-redux";
import React                  from 'react';
import {Component}            from 'react';
import BottomNavigation       from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GameIcon               from '@material-ui/icons/VideogameAsset';
import SettingsIcon           from '@material-ui/icons/SettingsApplications';

class Navbar extends Component {

    render() {
        return <BottomNavigation showLabels>
            <BottomNavigationAction label="Jouer" icon={<GameIcon/>}/>
            <BottomNavigationAction label="Configuration" icon={<SettingsIcon/>}/>
        </BottomNavigation>;
    }

}

export default connect()(Navbar);