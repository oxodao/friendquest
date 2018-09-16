export const FETCH_GAMES = "FETCH_GAMES";
export const GOT_GAMES   = "GOT_GAMES";

export const fetchGamesAction = () => {
    return {type: FETCH_GAMES};
};

export const gotGamesAction = (payload = {results: []}) => {
    return {type: GOT_GAMES, payload};
};