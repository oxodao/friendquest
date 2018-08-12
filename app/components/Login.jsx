import React                                                from 'react';
import {Component}                                          from 'react';
import {Button, TextField}                                  from "@material-ui/core/es/index";
import '../assets/css/login.scss';
import {connect}                                            from "react-redux";
import {getTokenAction, loginAction, updateTypedCredAction} from "../actions/token_actions";
import {bindActionCreators}                                 from "redux";
import {NO_TOKEN_AVAILABLE}                                 from "../middleware/LocalStorageMiddleware";

class Login extends Component {

    onChange(username, password) {
        let typed = {};
        if (username !== null)
            typed.username = username;
        if (password !== null)
            typed.password = password;

        this.props.updateTyped(typed);
    }

    keypressed(e) {
        if (13 === e.keyCode) {
           this.login();
        }
    }

    login() {
        this.props.login({username: this.props.username, password: this.props.password});
    }

    componentDidMount() {
        if (null === this.props.user) {
            this.props.getToken();
        }
    }

    render() {
        return <div id="login-body" className={(this.props.token !== null && this.props.token !== NO_TOKEN_AVAILABLE && this.props.token.length > 0) ? 'hidden' : ''}>
            <div className="login-form">
                <h1>FriendsQuest</h1>
                <div className="login-fields">
                    <TextField
                        id="username-input"
                        label="Username"
                        margin="normal"
                        value={this.props.username}
                        onChange={(a) => this.onChange(a.target.value, null)}
                        fullWidth={true}
                    />

                    <TextField
                        id="password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        value={this.props.password}
                        onChange={(a) => this.onChange(null, a.target.value)}
                        onKeyDown={(e) => this.keypressed(e) }
                        fullWidth={true}
                    />
                </div>
                <Button variant="contained" color="primary" onClick={() => {this.login()}}>
                    Login
                </Button>
            </div>
        </div>;
    }

}


export default connect(
    state => ({
        token: state.tokenReducer.token,
        user: state.tokenReducer.user,
        username: state.tokenReducer.username,
        password: state.tokenReducer.password,
    }),
    dispatch => ({
        updateTyped: bindActionCreators(updateTypedCredAction, dispatch),
        login: bindActionCreators(loginAction, dispatch),
        getToken: bindActionCreators(getTokenAction, dispatch),
    }),
)(Login);
