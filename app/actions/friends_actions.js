export const TOGGLE_ADD_FRIEND = "TOGGLE_ADD_FRIEND";
export const UPDATE_ADD_FRIEND = "UPDATE_ADD_FRIEND";

export const toggleAddFriendAction = (payload = {shown: false}) => {
    return {type: TOGGLE_ADD_FRIEND, payload};
};

export const updateAddFriendAction = (payload = {typed: ""}) => {
    return {type: UPDATE_ADD_FRIEND, payload};
};
