import React, { useReducer } from "react";

import SignUpContext from "./SignUpContext";
import SignUpReducer from "./SignUpReducer";
import fetcher from "../../back_end/api/fetcher";

import validate, { field } from "../../components/validetor/validetor";
import { changeStatusByParams } from "../../components/sing_up/change_status_func";

import {
  SIGNUP_CHANGE_STATUS,
  SIGNUP_UPDATE_STATE,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_INIT,
  SET_STATE_FOR_UPDATE,
} from "../types";

const SignUpState = (props) => {
  const initialState = {
    loading: false,
    // THE STATUSE NEED TO START IN 1 !
    status: 1,
    display_name: field({
      name: "display_name",
      isRequired: true,
      minLength: 2,
    }),

    email: field({
      name: "email",
      isRequired: true,
      // eslint-disable-next-line
      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    }),
    password: field({ name: "password", isRequired: true, minLength: 6 }),
    age: field({ name: "age", isRequired: true, minLength: 2 }),
    city_id: field({ name: "city_id", isRequired: true, minLength: 1 }),
    country_id: field({ name: "country_id", isRequired: true, minLength: 1 }),
    profession: field({ name: "profession", isRequired: true, minLength: 2 }),
    studio: field({ name: "studio", isRequired: true, minLength: 1 }),
    genre: field({ name: "genre", isRequired: true, minLength: 1 }),
    sub_genre: field({ name: "sub_genre", isRequired: true, minLength: 1 }),
    booking: field({ name: "booking", isRequired: true, minLength: 1 }),
    sound_cloud: field({
      name: "sound_cloud",
      isRequired: false,
      pattern: /^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/,
    }),
    // eslint-disable-next-line
    you_tube: field({
      name: "you_tube",
      isRequired: false,
      pattern: /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/,
    }),
    headline: field({ name: "headline", isRequired: true, minLength: 1 }),
    signUpSuccess: null,
    signUpFail: null,
  };
  const [state, dispatch] = useReducer(SignUpReducer, initialState);

  // CHANGE STATUS
  const changeStatus = (operation) => {
    let corStatus = changeStatusByParams(state.status, operation, state);
    dispatch({
      type: SIGNUP_CHANGE_STATUS,
      payload: corStatus,
    });
  };
  //
  // ON - CHANGE STATE
  const onchange = ({ name, value }) => {
    const errors = validate(name, value, state[name].validations);
    dispatch({
      type: SIGNUP_UPDATE_STATE,
      payload: {
        name: name,
        value: { ...state[name], value, errors },
      },
    });
  };

  const onChangeAutoComplit = (name, value) => {
    const errors = validate(name, value, state[name].validations);
    onchange({ name, value });
  };

  // SIGNUP LOADED
  const registerAPI = async () => {
    try {
      const result = {};
      const dontInclude = ["status", "signUpSuccess", "signUpFail", "loading"];
      for (let prop in state) {
        if (dontInclude.includes(prop)) {
          continue;
        }
        result[prop] = state[prop].value;
      }
      const resultAPI = await fetcher.post(
        `/users/upload_user_no_image`,
        result
      );
      if (resultAPI.data.userId === "false") {
        dispatch({
          type: SIGNUP_FAIL,
        });
      } else {
        dispatch({
          type: SIGNUP_SUCCESS,
        });
      }
    } catch (e) {
      dispatch({
        type: SIGNUP_FAIL,
      });
    }
  };
  const stateInit = () => {
    dispatch({
      type: SIGNUP_INIT,
    });
  };
  const setStateForUpdate = (user) => {
    const {
      display_name,
      age,
      city_id,
      country_id,
      professions,
      studio,
      genre_id,
      sub_genre_id,
      booking,
      sound_cloud,
      you_tube,
      headline,
    } = user;
    dispatch({
      type: SET_STATE_FOR_UPDATE,
      payload: {
        display_name,
        age,
        city_id,
        country_id,
        profession: professions,
        studio,
        genre: genre_id,
        sub_genre: sub_genre_id,
        booking,
        sound_cloud,
        you_tube,
        headline,
      },
    });
  };
  // UPDATE USER
  const updateUserData = async (id) => {
    try {
      const data = {
        id: id,
        display_name: state.display_name.value,
        genre: state.genre.value,
        sub_genre: state.sub_genre.value,
        profession: state.profession.value,
        studio: state.studio.value,
        booking: state.booking.value,
        age: state.age.value,
        country_id: state.country_id.value,
        city_id: state.city_id.value,
        headline: state.headline.value,
        sound_cloud: state.sound_cloud.value,
        you_tube: state.you_tube.value,
      };
      console.log(data);
      await fetcher.put(`/users/update_profile`, data);
      window.location.reload(false);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <SignUpContext.Provider
      value={{
        // THE STATUS NEED TO START IN 1 !
        status: state.status,
        display_name: state.display_name,
        email: state.email,
        password: state.password,
        age: state.age,
        city_id: state.city_id,
        country_id: state.country_id,
        profession: state.profession,
        studio: state.studio,
        genre: state.genre,
        sub_genre: state.sub_genre,
        booking: state.booking,
        sound_cloud: state.sound_cloud,
        you_tube: state.you_tube,
        headline: state.headline,
        signUpSuccess: state.signUpSuccess,
        signUpFail: state.signUpFail,
        loading: state.loading,
        changeStatus,
        onchange,
        onChangeAutoComplit,
        registerAPI,
        stateInit,
        setStateForUpdate,
        updateUserData,
      }}
    >
      {props.children}
    </SignUpContext.Provider>
  );
};
export default SignUpState;
