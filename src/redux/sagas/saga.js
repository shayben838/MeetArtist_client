import { takeLatest, call, put } from "redux-saga/effects"
import fetcher from "../../back_end/api/fetcher";
import { fetcherCookies } from "../../back_end/api/fetcher"
import axios from "axios";

const cookies = require("js-cookie");


function* signInWorker(action) {
    let user
    let data
    try {
        // FACEBOOK OR GOOGLE LOG IN PASSWORD NOT REQUIRED
        if (action.payLoad.p === "not requierd") {
            data = yield call(() => fetcher.post("/users/log_in_with_facebook", { email: action.payLoad.e, password: action.payLoad.p }))
            yield put({ type: "SIGN_IN_ASYNC_WORKER", payLoad: data.data.result[0] });
            action.payLoad.f("sucsses");
        }
        // MANUAL LOG IN 
        else if (action.payLoad.e) {
            data = yield call(() => fetcher.post("/users/log_in", { email: action.payLoad.e, password: action.payLoad.p }))
            yield put({ type: "SIGN_IN_ASYNC_WORKER", payLoad: data.data.result[0] });


            action.payLoad.f("sucsses");
        }
        // IF COOKIES
        else if (cookies.get('MeetArtist_user')) {
            let id = JSON.parse(cookies.get('MeetArtist_user'));
            const token = JSON.parse(cookies.get('MeetArtist_user'));
            data = yield call(() => fetcher.post("/users/cookie_log_in",
                { email: id, redux: "redux" },
                {
                    headers: { 'authorization': `${token.token}` }
                }));
                if(data.data.message === "auth failde"){
                    document.cookie = "MeetArtist_user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

                }
            yield put({ type: "SIGN_IN_ASYNC_WORKER", payLoad: data.data.result[0] })

            // THE CODE DOWN IS BEFORE JWT
            // user = JSON.parse(cookies.get('MeetArtist_user'));
            // console.log("@ user :",user)
            // data = yield call(() => fetcher.post("/users/cookie_log_in", { email: user, redux: "redux" }));
            // yield put({ type: "SIGN_IN_ASYNC_WORKER", payLoad: data.data.result[0] })
        }
    }
    catch{
        action.payLoad.f("user_not_found");
    }
}



export function* watchLogged() {
    yield takeLatest("SIGN_IN_ASYNC", signInWorker);
}