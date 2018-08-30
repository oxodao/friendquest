export const DEFAULT_PROFILE = { username: "", email: ""};

export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const SEND_PROFILE   = "SEND_PROFILE";

export const updateProfileAction = (payload = DEFAULT_PROFILE) => {
    return { type: UPDATE_PROFILE, payload };
};

export const sendProfileAction = (payload = DEFAULT_PROFILE) => {
    return { type: SEND_PROFILE, payload };
};