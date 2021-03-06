export const changeStatusByParams = (status, operation, state) => {
  if (status === 1) {
    if (
      (state.display_name.value.length === 0 ||
        state.headline.value.length === 0 ||
        state.email.value.length === 0 ||
        state.password.value.length === 0) &&
      operation === "Next"
    ) {
      return status;
    }
    if (
      state.display_name.errors.length !== 0 ||
      state.email.errors.length !== 0 ||
      state.password.errors.length !== 0 ||
      state.headline.errors.length !== 0
    ) {
      return status;
    }
  }

  if (status === 2) {
    if (
      (state.age.value.length === 0 ||
        state.city_id.value.length === 0 ||
        state.country_id.value.length === 0) &&
      operation === "Next"
    ) {
      return status;
    }
    if (
      state.age.errors.length !== 0 ||
      state.city_id.errors.length !== 0 ||
      state.country_id.errors.length !== 0
    ) {
      return status;
    }
  }

  if (status === 3) {
    if (
      (state.profession.value.length === 0 ||
        state.studio.value.length === 0 ||
        state.genre.value.length === 0 ||
        state.sub_genre.value.length === 0 ||
        state.booking.value.length === 0) &&
      operation === "Next"
    ) {
      return status;
    }
    if (
      state.sound_cloud.errors.length !== 0 ||
      state.studio.errors.length !== 0 ||
      state.genre.errors.length !== 0 ||
      state.sub_genre.errors.length !== 0 ||
      state.booking.errors.length !== 0
    ) {
      return status;
    }
  }

  if (status === 1 && operation === "Previous") {
    return 1;
  } else if (status === 4 && operation === "Next") {
    return 4;
  } else if (operation === "Previous") {
    return status - 1;
  } else if (operation === "Next") {
    return status + 1;
  }
};
