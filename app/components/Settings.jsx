import React, {Component}      from 'react';
import {connect}               from "react-redux";
import {bindActionCreators}    from 'redux';
import BackgroundUserImage     from "./BackgroundUserImage";
import NavBar                  from './Navbar';
import {deleteTokenAction}     from "../actions/token_actions";
import List                    from '@material-ui/core/List';
import ListItem                from '@material-ui/core/ListItem';
import ListItemText            from '@material-ui/core/ListItemText';
import Divider                 from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton              from '@material-ui/core/IconButton';
import LogoutIcon              from '@material-ui/icons/Delete';

import '../assets/css/settings.scss';

class Settings extends Component {

    render() {
        return <div className="container">
            <BackgroundUserImage user={this.props.user}/>
            <div className="content" id="Settings">
                <h1 className="darken">Paramètres</h1>
                <List className="darken">
                    <ListItem button>
                        <ListItemText primary="Blabla"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Blabla"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Blabla"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Blabla"/>
                    </ListItem>
                    <Divider/>
                    <ListItem button onClick={this.props.logout}>
                        <ListItemText primary="Déconnexion"/>
                        <ListItemSecondaryAction>
                            <IconButton onClick={this.props.logout} aria-label="Logout">
                                <LogoutIcon/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </div>
            <NavBar/>
        </div>;
    }

}


export default connect(
    state => ({
        user: state.tokenReducer.user,
    }),
    dispatch => ({
        logout: bindActionCreators(deleteTokenAction, dispatch),
    }),
)(Settings);