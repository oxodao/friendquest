export const STATE_REQUEST = 1;
export const STATE_FRIENDS = 2;
export const STATE_PENDING = 3;

import React, { Component }    from 'react';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText            from '@material-ui/core/ListItemText';
import IconButton              from '@material-ui/core/IconButton';
import DeleteIcon              from '@material-ui/icons/Close';
import AcceptIcon              from '@material-ui/icons/Done';
import ListItem                from '@material-ui/core/ListItem';
import PlayIcon                from '@material-ui/icons/PlayArrow';
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
                    rightside = <ListItemSecondaryAction>
                        <IconButton>
                            <PlayIcon/>
                        </IconButton>
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
            <Avatar alt={this.props.friend.username} src={this.props.friend.image}/>
            <ListItemText primary={this.props.friend.username}/>
            {rightside}
        </ListItem>;

    }

}

export default FriendListItem;
