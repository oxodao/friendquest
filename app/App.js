import React, {Component}            from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Login                         from './components/Login';
import red                           from "@material-ui/core/es/colors/red";
import MuiThemeProvider              from "@material-ui/core/es/styles/MuiThemeProvider";
import {createMuiTheme}              from '@material-ui/core/styles';
import {connect}                     from "react-redux";
import SnackbarCustom                from "./components/SnackbarCustom";
import FriendList                    from "./components/FriendList";
import NavBar                        from './components/Navbar';

import UserImage from "./assets/images/default.svg";

import './assets/css/App.scss';
import './assets/images/background.jpg';
import Settings  from "./components/Settings";

class App extends Component {

    render() {
        const theme = createMuiTheme({
            palette: {
                type: 'dark',
                primary: red,
            },
        });

        let logged   = this.props.user !== null;
        let picture  = logged ? this.props.user.image : UserImage;
        let username = logged ? this.props.user.username : 'Not logged';

        let header = <div id="Main_Header">
            <img src={picture} alt="User picture"/>
            <h2>{username}</h2>
        </div>;


        return (
            <MuiThemeProvider theme={createMuiTheme(theme)}>
                <div className="App">
                    {header}
                    <Router>
                        <div id="Router">
                            <Route exact path="/" component={FriendList}/>
                            <Route path="/settings" component={Settings}/>
                        </div>
                    </Router>
                    <NavBar/>

                    <Login/>
                    <SnackbarCustom/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect(
    state => ({
        user: state.tokenReducer.user,
    }),
    dispatch => ({}),
)(App);
