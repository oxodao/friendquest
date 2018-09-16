import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BackgroundUserImage from "./BackgroundUserImage";
import NavBar from "./Navbar";
import { deleteTokenAction } from "../actions/token_actions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import LogoutIcon from "@material-ui/icons/Close";
import MusicIcon from "@material-ui/icons/MusicNote";
import VibrationsIcon from "@material-ui/icons/Vibration";
import EditIcon from "@material-ui/icons/Edit";
import UserIcon from "@material-ui/icons/Person";
import LoggedDevicesIcon from "@material-ui/icons/TapAndPlay";
import Switch from "@material-ui/core/Switch";

import "../assets/css/settings.scss";
import { setConfigAction } from "../actions/config_actions";

class Settings extends Component {
  setConfig(config, value) {
    let newConfig = { ...this.props.config };
    newConfig[config] = value;

    this.props.setConfig(newConfig);
  }

  render() {
    return (
      <div className="container">
        <BackgroundUserImage user={this.props.user} />
        <div className="innerContainer">
          <div className="content" id="Settings">
            <List
              className="darken"
              subheader={<ListSubheader>Paramètres</ListSubheader>}
            >
              <ListItem button>
                <ListItemIcon>
                  <UserIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
                <ListItemSecondaryAction>
                  <IconButton aria-label="edit-profile">
                    <EditIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <MusicIcon />
                </ListItemIcon>
                <ListItemText primary="Musique ?" />
                <ListItemSecondaryAction>
                  <Switch
                    checked={this.props.config.music}
                    onClick={() =>
                      this.setConfig("music", !this.props.config.music)
                    }
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <VibrationsIcon />
                </ListItemIcon>
                <ListItemText primary="Sons ?" />
                <ListItemSecondaryAction>
                  <Switch
                    checked={this.props.config.sound}
                    onClick={() =>
                      this.setConfig("sound", !this.props.config.sound)
                    }
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <VibrationsIcon />
                </ListItemIcon>
                <ListItemText primary="Vibrations ?" />
                <ListItemSecondaryAction>
                  <Switch
                    checked={this.props.config.vibrations}
                    onClick={() =>
                      this.setConfig(
                        "vibrations",
                        !this.props.config.vibrations
                      )
                    }
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <LoggedDevicesIcon />
                </ListItemIcon>
                <ListItemText primary="Appareils connectés" />
              </ListItem>
              <ListItem dense>
                <ListItemText
                  primary="FriendsQuest by Oxodao"
                  secondary="Version 0.1-INDEV"
                />
              </ListItem>
              <Divider />
              <ListItem button onClick={this.props.logout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Déconnexion" />
              </ListItem>
            </List>
          </div>
          <NavBar />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.tokenReducer.user,
    config: state.configReducer
  }),
  dispatch => ({
    logout: bindActionCreators(deleteTokenAction, dispatch),
    setConfig: bindActionCreators(setConfigAction, dispatch)
  })
)(Settings);