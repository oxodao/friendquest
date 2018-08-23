import React, { Component } from 'react';
import { connect } from "react-redux";
import BackgroundUserImage from "./BackgroundUserImage";
import NavBar from './Navbar';

class Search extends Component {

    render() {
        return <div className="container">
            <BackgroundUserImage user={this.props.user}/>
            <div className="content">
            </div>
            <NavBar/>
        </div>;

    }

}

export default connect(
    state => ({
        user: state.tokenReducer.user,
    }),
    dispatch => ({})
)(Search);
