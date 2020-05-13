const cookies = require("js-cookie");

// LOG IN && LOG OUT
export const logIn = (data="") => {
    return{
        type: "SIGN_IN_ASYNC",
        payLoad:data
    }
}
export const loggedOut = () => {
    // document.cookie = "MeetArtist_user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    cookies.remove('id');
    cookies.remove('token');
    return {
        type: "LOG_OUT",
        payload: false
    }
};
