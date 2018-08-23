export const UPDATE_ADD_FRIEND      = "UPDATE_ADD_FRIEND";
export const GOT_RESULTS_ADD_FRIEND = "GOT_RESULTS_ADD_FRIEND";

export const updateAddFriendAction = (payload = {typed: ""}) => {
    return {type: UPDATE_ADD_FRIEND, payload};
};

export const gotResultsAddFriend = (payload = {results: []}) => {
    return {type: GOT_RESULTS_ADD_FRIEND, payload};
};


