export const UPDATE_TYPED_CRED = "UPDATE_TYPED_CRED";
export const LOGIN             = "LOGIN";
export const READ_TOKEN        = "READ_TOKEN";
export const GET_TOKEN         = "GET_TOKEN";
export const SET_TOKEN         = "SET_TOKEN";
export const DELETE_TOKEN      = "DELETE_TOKEN";
export const FETCH_USER_INFO   = "FETCH_USER_INFO";
export const GOT_USER_INFO     = "GOT_USER_INFO";

export const REMOVE_FRIEND  = "REMOVE_FRIEND";
export const REMOVED_FRIEND = "REMOVED_FRIEND";
export const ADD_FRIEND     = "ADD_FRIEND";
export const ADDED_FRIEND   = "ADDED_FRIEND";

export const updateTypedCredAction = (payload = {username: '', password: ''}) => {
    return {type: UPDATE_TYPED_CRED, payload};
};

export const loginAction = (payload = {username: '', password: ''}) => {
    return {type: LOGIN, payload};
};

export const setTokenAction = (payload = {token: ''}) => {
    return {type: SET_TOKEN, payload};
};

export const getTokenAction = () => {
    return {type: GET_TOKEN};
};

export const readTokenAction = (payload = {token: '', refreshToken: ''}) => {
    return {type: READ_TOKEN, payload};
};

export const deleteTokenAction = () => {
    return {type: DELETE_TOKEN};
};

export const fetchUserInfoAction = () => {
    return {type: FETCH_USER_INFO};
};

export const gotUserInfoAction = (payload = {info: []}) => {
    return {type: GOT_USER_INFO, payload};
};

export const addFriendAction = (payload = { user: '' }) => {
    return {type: ADD_FRIEND, payload};
}

export const addedFriendAction = (payload = { friend: {}, state: -1 }) => {
    return {type: ADDED_FRIEND, payload};
}

export const removeFriendAction = (payload = {user: ''}) => {
    return {type: REMOVE_FRIEND, payload};
};

export const removedFriendAction = (payload = {user: ''}) => {
    return {type: REMOVED_FRIEND, payload};
};
