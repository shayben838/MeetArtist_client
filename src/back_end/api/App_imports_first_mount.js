import { getInitData } from "./api_action";

const initImportsMainAPI = async () => {
  const initData = await getInitData();
  const {
    cities,
    countries,
    users,
    genre,
    sub_genre,
    profession,
  } = initData.data;
  return { cities, countries, users, genre, sub_genre, profession };
};

export { initImportsMainAPI };
