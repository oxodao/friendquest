export const UPDATE_SNACKBAR = "UPDATE_SNACKBAR";

export const updateSnackbarAction = (payload = {open: false, message: ''}) => ({ type: UPDATE_SNACKBAR, payload });