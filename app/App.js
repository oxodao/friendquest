import React, {Component} from 'react';
import Login              from './components/Login';
import './assets/css/App.scss';
import red                from "@material-ui/core/es/colors/red";
import MuiThemeProvider   from "@material-ui/core/es/styles/MuiThemeProvider";
import {createMuiTheme}   from '@material-ui/core/styles';
import {connect}          from "react-redux";
import SnackbarCustom     from "./components/SnackbarCustom";

class App extends Component {

    render() {
        const theme = createMuiTheme({
            palette: {
                type: 'dark',
                primary: red,
            },
        });

        return (
            <MuiThemeProvider theme={createMuiTheme(theme)}>
                <div className="App">

                    <Login/>
                    <SnackbarCustom/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect(
    state => ({}),
    dispatch => ({}),
)(App);
