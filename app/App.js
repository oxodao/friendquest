import React, { Component }            from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Login                           from './components/Login';
import red                             from '@material-ui/core/es/colors/red';
import MuiThemeProvider                from '@material-ui/core/es/styles/MuiThemeProvider';
import { createMuiTheme }              from '@material-ui/core/styles';
import { connect }                     from 'react-redux';
import SnackbarCustom                  from './components/SnackbarCustom';
import FriendList                      from './components/FriendList';
import UserImage                       from './assets/images/default.svg';
import Settings                        from './components/Settings';
import { fetchUserInfoAction }         from './actions/token_actions';
import { bindActionCreators }          from 'redux';

import './assets/css/App.scss';
import './assets/images/background.jpg';
import Search                          from './components/Search';
import GameInstance                    from './components/GameInstance';
import { imageURL }                    from "./config";

class App extends Component {

    render() {
        const theme = createMuiTheme({
            palette: {
                type   : 'dark',
                primary: red,
            },
        });

        let logged   = this.props.user !== null && this.props.user !== undefined;
        let picture  = logged ? imageURL + this.props.user.username + "_small.png" : UserImage;
        let username = logged ? this.props.user.username : 'Not logged';

        let header = <div id="Main_Header">
            <img src={picture} alt="User picture"/>
            <h2>{username}</h2>
        </div>;

        let game = '';

        if (this.props.game.gameID !== undefined && this.props.game.gameID !== null) {
            game = <div className="App ingame"><GameInstance/></div>;
        } else {
            game = <div className="App">
                {header}
                <Router>
                    <div id="Router">
                        <Route exact path="/" component={FriendList}/>
                        <Route exact path="/search" component={Search}/>
                        <Route path="/settings" component={Settings}/>
                    </div>
                </Router>

                <Login/>
                <SnackbarCustom/>
            </div>;
        }

        return (
            <MuiThemeProvider theme={createMuiTheme(theme)}>
                {game}
            </MuiThemeProvider>
        );
    }
}

export default connect(
    state => ({
        user: state.tokenReducer.user,
        game: state.gameReducer,
    }),
    dispatch => ({
        fetchUserInfo: bindActionCreators(fetchUserInfoAction, dispatch),
    }),
)(App);
