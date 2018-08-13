import React, {Component}      from 'react';
import {connect}               from "react-redux";
import NavBar                  from './Navbar';

import BackgroundUserImage     from "./BackgroundUserImage";
import List                    from '@material-ui/core/List';
import ListItem                from '@material-ui/core/ListItem';
import ListItemText            from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListSubheader           from '@material-ui/core/ListSubheader';
import IconButton              from '@material-ui/core/IconButton';
import Avatar                  from '@material-ui/core/Avatar';

import DeleteIcon from '@material-ui/icons/Close';
import AcceptIcon from '@material-ui/icons/Done';
import PlayIcon from '@material-ui/icons/PlayArrow';

import '../assets/css/friendlist.scss';

class FriendList extends Component {

    generateSubHeader(title, condition, className = "") {
        let user = this.props.user;
        if (null !== user) {
            if (undefined !== user[condition] && null !== user[condition] && user[condition].length > 0) {
                return <ListSubheader className={className}>{title}</ListSubheader>;
            }
        }
    }

    render() {

        let friends  = '';
        let requests = '';
        let pendings = '';

        if (null !== this.props.user) {

            // Theses are only defined when the /me requests got back
            if (undefined !== this.props.user.requests) {
                requests = this.props.user.requests.map(friend => <ListItem className="darker-blue" key={friend.id}>
                    <Avatar alt={friend.username} src={friend.image}/>
                    <ListItemText primary={friend.username}/>
                    <ListItemSecondaryAction>
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>
                        <IconButton>
                            <AcceptIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>);
            }

            if (undefined !== this.props.user.friends) {
                friends = this.props.user.friends.map(friend => <ListItem button key={friend.id}>
                    <Avatar alt={friend.username} src={friend.image}/>
                    <ListItemText primary={friend.username}/>
                    <ListItemSecondaryAction>
                        <IconButton>
                            <PlayIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>);
            }

            if (undefined !== this.props.user.pendings) {
                pendings = this.props.user.pendings.map(friend => <ListItem key={friend.id}>
                    <Avatar alt={friend.username} src={friend.image}/>
                    <ListItemText primary={friend.username}/>
                    <ListItemSecondaryAction>
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>);
            }
        }

        return <div className="container">
            <BackgroundUserImage user={this.props.user}/>
            <div className="content">
                <List className="darken" subheader={<li/>}>
                    {this.generateSubHeader("Demandes d'amis", 'requests', 'dark-blue')}
                    {requests}

                    <ListSubheader>Mes amis</ListSubheader>
                    {friends}

                    {this.generateSubHeader("En attente...", 'pendings')}
                    {pendings}

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
    dispatch => ({}),
)(FriendList);