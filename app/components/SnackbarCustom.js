import {updateSnackbarAction} from "../actions/snackbar_actions";
import {bindActionCreators}   from "redux";
import React, {Component}     from 'react';
import {Snackbar}             from "@material-ui/core/index.js";
import {connect}              from "react-redux";

class SnackbarCustom extends Component {

    handleRequestClose() {
        this.props.updateMessage({open: false, message: ''});
    }

    render() {
        return <Snackbar
            open={this.props.open}
            message={this.props.message}
            autoHideDuration={4000}
            onClose={() => this.handleRequestClose()}
        />
    }

}

export default connect(
    state => ({
        open: state.snackbarReducer.open,
        message: state.snackbarReducer.message
    }),
    dispatch => ({
        updateMessage: bindActionCreators(updateSnackbarAction, dispatch)
    })
)(SnackbarCustom);