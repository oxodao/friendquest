import { imageURL } from "../config";

export const STATE_REQUEST = 1;
export const STATE_FRIENDS = 2;
export const STATE_PENDING = 3;

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import {bindActionCreators}    from 'redux';
import React, {Component}      from 'react';
import {fetchOneGame}          from '../actions/game_actions';
import ListItemText            from '@material-ui/core/ListItemText';
import {connect}               from 'react-redux';
import IconButton              from '@material-ui/core/IconButton';
import DeleteIcon              from '@material-ui/icons/Close';
import AcceptIcon              from '@material-ui/icons/Done';
import ListItem                from '@material-ui/core/ListItem';
import CreaIcon                from '@material-ui/icons/Add';
import PlayIcon                from '@material-ui/icons/PlayArrow';
import WaitIcon                from '@material-ui/icons/HourglassEmpty';
import Avatar                  from '@material-ui/core/Avatar';

class FriendListItem extends Component {

    render() {
        if (!this.props.friend)
            return <div>Err!</div>;

        let rightside = <div/>;

        if (this.props.state) {
            switch (this.props.state) {
                case STATE_REQUEST:
                    rightside = <ListItemSecondaryAction>
                        <IconButton onClick={() => this.props.removeFriend()}>
                            <DeleteIcon/>
                        </IconButton>
                        <IconButton onClick={() => this.props.addFriend()}>
                            <AcceptIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>;
                    break;
                case STATE_FRIENDS:
                    let iconButton = '';
                    if (!this.props.friend.game) {
                        iconButton = <IconButton> <CreaIcon/> </IconButton>;
                    } else if (this.props.friend.game.myTurn) {
                        iconButton = <IconButton onClick={() => {
                            this.props.fetchGame();
                        }}> <PlayIcon/> </IconButton>;
                    } else {
                        iconButton = <IconButton> <WaitIcon/> </IconButton>;
                    }
                    rightside = <ListItemSecondaryAction>
                        {iconButton}
                    </ListItemSecondaryAction>;
                    break;
                case STATE_PENDING:
                    rightside = <ListItemSecondaryAction>
                        <IconButton onClick={() => this.props.removeFriend()}>
                            <DeleteIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>;
                    break;
                default:
                    break;
            }
        }

        return <ListItem className="darker-blue" key={this.props.friend.id}>
            <Avatar alt={this.props.friend.username} src={imageURL + this.props.friend.username + "_small.png"}/>
            <ListItemText primary={this.props.friend.username}/>
            {rightside}
        </ListItem>;

    }

}

export default FriendListItem;
