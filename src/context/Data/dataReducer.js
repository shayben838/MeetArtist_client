import {
  LOAD_INIT_DATA,
  SET_FILTER,
  FILTER_USERS,
  CLEAR_FILTER,
  GET_SINGLE_USER_PAGE,
  SET_HAVE_LIKE,
  CLEAR_HAVE_LIKE,
} from "../types";

export default (state, action) => {
  switch (action.type) {
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
    case SET_HAVE_LIKE:
      return {
        ...state,
        haveLike: true,
      };
    case CLEAR_HAVE_LIKE:
      return {
        ...state,
        haveLike: null,
      };
  }
};
