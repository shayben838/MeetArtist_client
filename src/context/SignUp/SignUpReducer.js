import {
  LOAD_INIT_DATA,
  SET_FILTER,
  FILTER_USERS,
  CLEAR_FILTER,
  GET_SINGLE_USER_PAGE,
  //
  SIGNUP_CHANGE_STATUS,
  SIGNUP_UPDATE_STATE,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_INIT,
  SET_STATE_FOR_UPDATE,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SIGNUP_CHANGE_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case SIGNUP_UPDATE_STATE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case LOAD_INIT_DATA:
      const {
        users,
        cities,
        countries,
        genre,
        sub_genre,
        profession,
      } = action.payload.data;
      return {
        ...state,
        users,
        cities,
        countries,
        genre,
        sub_genre,
        profession,
        usersFilterd: users,
      };
    case SET_FILTER:
      const { name, value } = action.payload;
      return {
        ...state,
        filterBy: {
          ...state.filterBy,
          [name]: value,
        },
      };
    case FILTER_USERS:
      return {
        ...state,
        usersFilterd: action.payload.data.result,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filterBy: {
          id: "",
          display_name: "",
          genre: "",
          sub_genre: "",
          profession: "",
          studio: "",
          booking: "",
          minAge: "",
          maxAge: "",
          country: "",
          city: "",
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          phone: "",
          role_id: "",
          description: "",
          created_on: "",
          sound_cloud: "",
          you_tube: "",
          profile_image: "",
        },
      };
    case GET_SINGLE_USER_PAGE:
      return {
        ...state,
        singleUserPage: action.payload.user.data.result[0],
        likesBySingleUser: action.payload.likes.data.allUsers,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signUpSuccess: true,
        loading: false,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        signUpFail: true,
        loading: false,
      };
    case SIGNUP_INIT:
      return {
        ...state,
        signUpFail: null,
        signUpSuccess: null,
        loading: false,
      };
    case SET_STATE_FOR_UPDATE:
      return {
        ...state,
        display_name: {
          ...state.display_name,
          value: action.payload.display_name,
        },
        age: {
          ...state.age,
          value: action.payload.age,
        },
        city_id: {
          ...state.city_id,
          value: action.payload.city_id,
        },
        country_id: {
          ...state.country_id,
          value: action.payload.country_id,
        },
        profession: {
          ...state.profession,
          value: action.payload.profession,
        },
        studio: {
          ...state.studio,
          value: action.payload.studio,
        },
        genre: {
          ...state.genre,
          value: action.payload.genre,
        },
        sub_genre: {
          ...state.sub_genre,
          value: action.payload.sub_genre,
        },
        booking: {
          ...state.booking,
          value: action.payload.booking,
        },
        sound_cloud: {
          ...state.sound_cloud,
          value: action.payload.sound_cloud,
        },
        you_tube: {
          ...state.you_tube,
          value: action.payload.you_tube,
        },
        headline: {
          ...state.headline,
          value: action.payload.headline,
        },
      };
  }
};
