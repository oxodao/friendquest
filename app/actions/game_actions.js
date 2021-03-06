export const FETCH_GAMES = "FETCH_GAMES";
export const GOT_GAMES   = "GOT_GAMES";

export const FETCH_ONE_GAME = "FETCH_ONE_GAME";
export const GOT_ONE_GAME   = "GOT_ONE_GAME";

export const DISPLAY_ONE_GAME = "DISPLAY_ONE_GAME";

export const DEFAULT_GAME = {gameID: null, state: -1};

export const fetchGamesAction = () => {
    return { type: FETCH_GAMES };
};

export const gotGamesAction = (payload = { results: [] }) => {
    return { type: GOT_GAMES, payload };
};

export const fetchOneGameAction = (payload = { user: { id: "", game: { id: "" }}}) => {
    return { type: FETCH_ONE_GAME, payload };
};

export const gotOneGameAction = (payload = { friend: {id: ""}, game: { id: ""} }) => {
    return { type: GOT_ONE_GAME, payload };
};

export const displayOneGame = (payload = DEFAULT_GAME) => {
    return { type: DISPLAY_ONE_GAME, payload };
};