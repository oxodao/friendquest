import { addFriendAction, removeFriendAction } from "../actions/token_actions";
import { bindActionCreators }                  from 'redux';
import React, { Component }                    from 'react';
import BackgroundUserImage                     from "./BackgroundUserImage";
import ListSubheader                           from '@material-ui/core/ListSubheader';
import { connect }                             from "react-redux";
import NavBar                                  from './Navbar';
import List                                    from '@material-ui/core/List';

import '../assets/css/friendlist.scss';
import FriendListItem, { STATE_FRIENDS, STATE_PENDING, STATE_REQUEST } from "./FriendListItem";

class FriendList extends Component {

    generateSubHeader(title, condition, className = "") {
        let user = this.props.user;
        if (null !== user) {
            if (undefined !== user[ condition ] && null !== user[ condition ] && user[ condition ].length > 0) {
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
                requests = this.props.user.requests.map(friend => <FriendListItem key={friend.id} friend={friend} state={STATE_REQUEST}
                                                                          addFriend={() => this.props.addFriend({ user: friend.username })}
                                                                          removeFriend={() => this.props.removeFriend({ user: friend.id })}/>);
            }

            if (undefined !== this.props.user.friends) {
                friends = this.props.user.friends.map(friend => <FriendListItem key={friend.id} friend={friend} state={STATE_FRIENDS}/>);
            }

            if (undefined !== this.props.user.pendings) {
                pendings = this.props.user.pendings.map(friend => <FriendListItem key={friend.id} friend={friend} state={STATE_PENDING} removeFriend={() => this.props.removeFriend({ user: friend.id })}/>);
            }
        }

        return <div className="container">
            <BackgroundUserImage user={this.props.user}/>
            <div className="content">
                <List id="FriendList" className="darken" subheader={<li/>}>
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
    dispatch => ({
        addFriend : bindActionCreators(addFriendAction, dispatch),
        removeFriend: bindActionCreators(removeFriendAction, dispatch),
    }),
)(FriendList);
