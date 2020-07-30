import React, { useReducer } from "react";
import DataContext from "./dataContext";
import dataReducer from "./dataReducer";
import fetcher from "../../../src/back_end/api/fetcher";
import {
  LOAD_INIT_DATA,
  ERROR_DATA,
  FILTER_USERS,
  SET_FILTER,
  GET_SINGLE_USER_PAGE,
  CLEAR_FILTER,
  SET_HAVE_LIKE,
  CLEAR_HAVE_LIKE,
} from "../types";

const DataState = (props) => {
  const initialState = {
    users: null,
    cities: null,
    countries: null,
    genre: null,
    sub_genre: null,
    profession: null,
    singleUserPage: null,
    likesBySingleUser: null,
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
    usersFilterd: null,
    haveLike: null,
  };
  const [state, dispatch] = useReducer(dataReducer, initialState);

  //   LOAD DATA
  const loadData = async () => {
    try {
      const data = await fetcher.get("/initData");
      dispatch({
        type: LOAD_INIT_DATA,
        payload: data,
      });
    } catch (e) {
      console.error(e);
      dispatch({
        type: ERROR_DATA,
      });
    }
  };
  //   GET FILTER USERS
  const filterUsers = async () => {
    const {
      id,
      display_name,
      genre,
      sub_genre,
      profession,
      studio,
      booking,
      minAge,
      maxAge,
      country,
      city,
      first_name,
      last_name,
      email,
      password,
      phone,
      role_id,
      description,
      created_on,
      sound_cloud,
      you_tube,
      profile_image,
    } = state.filterBy;
    try {
      const res = await fetcher.get(
        `/users/filter?id=${id}&&display_name=${display_name}&&genre_id=${genre}&&sub_genre_id=${sub_genre}&&professions=${profession}&&studio=${studio}&&booking=${booking}&&minAge=${minAge}&&maxAge=${maxAge}&&country_id=${country}&&city_id=${city}&&first_name=${first_name}&&last_name=${last_name}&&email=${email}&&password=${password}&&phone=${phone}&&role_id=${role_id}&&description=${description}&&created_on=${created_on}&&sound_cloud=${sound_cloud}&&you_tube=${you_tube}&&profile_image=${profile_image}`
      );
      dispatch({
        type: FILTER_USERS,
        payload: res,
      });
    } catch (e) {
      console.error(e);
    }
  };

  // SET FILTER
  const setFilter = async (name, value) => {
    try {
      dispatch({
        type: SET_FILTER,
        payload: { name, value },
      });
      filterUsers();
    } catch (e) {
      console.error(e);
    }
  };
  // CLEAR FILTER
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };
  // GET SINGLE USER PAGE
  const getSingleUserPage = async (id) => {
    try {
      const likes = await fetcher.get(`/users/get_all_likes_by_user?id=${id}`);
      let user = await fetcher.get(`/users/singleUser?id=${id}`);
      dispatch({
        type: GET_SINGLE_USER_PAGE,
        payload: {
          likes,
          user,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };
  // CHECK IF HAVE LIKE
  const checkIfHaveLike = (userLikes, singleUserPage_id) => {
    const haveLike = userLikes.filter(
      (item) => item.user_id === singleUserPage_id
    );
    console.log(haveLike);
    if (haveLike.length >= 1) {
      dispatch({
        type: SET_HAVE_LIKE,
      });
    } else {
      dispatch({
        type: CLEAR_HAVE_LIKE,
      });
    }
  };
  // ADD LIKE
  const addLike = async ({ user_id, from_user_id }) => {
    try {
      await fetcher.post("/users/post_like", {
        user_id,
        from_user_id,
      });
      dispatch({
        type: SET_HAVE_LIKE,
      });
    } catch (e) {
      dispatch({
        type: CLEAR_HAVE_LIKE,
      });
      console.error(e);
    }
  };
  // REMOVE LIKE
  const removeLike = async (userLikes, singleUserPage_id) => {
    try {
      const like_id = userLikes.filter(
        (item) => item.user_id === singleUserPage_id
      );
      await fetcher.put(`/users/remove_like_by_user?id=${like_id[0].id}`);
      dispatch({
        type: CLEAR_HAVE_LIKE,
      });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <DataContext.Provider
      value={{
        singleUserPage: state.singleUserPage,
        likesBySingleUser: state.likesBySingleUser,
        users: state.users,
        cities: state.cities,
        countries: state.countries,
        genre: state.genre,
        sub_genre: state.sub_genre,
        profession: state.profession,
        usersFilterd: state.usersFilterd,
        filterBy: state.filterBy,
        haveLike: state.haveLike,
        loadData,
        setFilter,
        filterUsers,
        clearFilter,
        getSingleUserPage,
        addLike,
        removeLike,
        checkIfHaveLike,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
export default DataState;
