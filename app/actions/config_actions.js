export const GET_CONFIG = "GET_CONFIG";
export const GOT_CONFIG = "GOT_CONFIG";
export const SET_CONFIG = "SET_CONFIG";

export const DEFAULT_CONFIG = { vibrations: false, music: true, sound: true };

export const getConfigAction = () => ({ type: GET_CONFIG });
export const gotConfigAction = (payload = DEFAULT_CONFIG) => ({ type: GOT_CONFIG, payload });
export const setConfigAction = (payload = DEFAULT_CONFIG) => ({ type: SET_CONFIG, payload });
