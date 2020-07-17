import { takeLatest, call, put } from "redux-saga/effects";
import fetcher from "../../back_end/api/fetcher";

const cookies = require("js-cookie");

function* signInWorker(action) {
  let data;
  try {
    // FACEBOOK OR GOOGLE LOG IN PASSWORD NOT REQUIRED
    if (action.payLoad.p === "not requierd") {
      data = yield call(() =>
        fetcher.post("/users/log_in_with_facebook", {
          email: action.payLoad.e,
          password: action.payLoad.p,
        })
      );
      yield put({ type: "SIGN_IN_ASYNC_WORKER", payLoad: data.data.result[0] });

      let token = data.data.token;
      let email = data.data.result[0].email;

      cookies.set("token", token, { expires: 7 });
      cookies.set("id", email, { expires: 7 });

      action.payLoad.f("sucsses");
    }
    // MANUAL LOG IN
    else if (action.payLoad.e) {
      data = yield call(() =>
        fetcher.post("/users/log_in", {
          email: action.payLoad.e,
          password: action.payLoad.p,
        })
      );
      let token = data.data.token;
      let email = data.data.result[0].email;

      // TOKEN COOKIE
      // res.cookie("MeetArtist_user", JSON.stringify({token:token,email:result[0].email}), { maxAge: 1000 * 60 * 60 * 24 * 7 });

      cookies.set("token", token, { expires: 7 });
      cookies.set("id", email, { expires: 7 });
      yield put({ type: "SIGN_IN_ASYNC_WORKER", payLoad: data.data.result[0] });
      action.payLoad.f("sucsses");
    }
    // IF COOKIES
    else if (cookies.get("token")) {
      let id = cookies.get("id");
      const token = cookies.get("token");
      data = yield call(() =>
        fetcher.post(
          "/users/cookie_log_in",
          { email: id, redux: "redux" },
          {
            headers: { authorization: `${token}` },
          }
        )
      );
      if (data.data.message === "auth failde") {
        cookies.remove("id");
        cookies.remove("token");
      }
      yield put({ type: "SIGN_IN_ASYNC_WORKER", payLoad: data.data.result[0] });

      // THE CODE DOWN IS BEFORE JWT
      // user = JSON.parse(cookies.get('MeetArtist_user'));
      // console.log("@ user :",user)
      // data = yield call(() => fetcher.post("/users/cookie_log_in", { email: user, redux: "redux" }));
      // yield put({ type: "SIGN_IN_ASYNC_WORKER", payLoad: data.data.result[0] })
    }
  } catch (error) {
    console.log("ER : ", error);
    action.payLoad.f("user_not_found");
  }
}

export function* watchLogged() {
  yield takeLatest("SIGN_IN_ASYNC", signInWorker);
}
