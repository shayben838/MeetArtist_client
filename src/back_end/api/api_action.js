import fetcher from "./fetcher";

// GET ALL ARTIST
const getAllArtist = async() =>{
    const response = await fetcher.get("/users");
    return response;
}
// USERS FILTERD
const getUsersFilterd = async ({id="",display_name="",genre="",sub_genre="",profession="",studio="",booking="",minAge="",maxAge="",country="",city="",first_name="",last_name="",email="",password="",phone="",role_id="",description="",created_on="",sound_cloud="",you_tube="",profile_image=""}) => {
    const respons = await fetcher.get(`/users/filter?id=${id}&&display_name=${display_name}&&genre_id=${genre}&&sub_genre_id=${sub_genre}&&professions=${profession}&&studio=${studio}&&booking=${booking}&&minAge=${minAge}&&maxAge=${maxAge}&&country_id=${country}&&city_id=${city}&&first_name=${first_name}&&last_name=${last_name}&&email=${email}&&password=${password}&&phone=${phone}&&role_id=${role_id}&&description=${description}&&created_on=${created_on}&&sound_cloud=${sound_cloud}&&you_tube=${you_tube}&&profile_image=${profile_image}`)
    return respons        
};
// GET SIGNGLE ARTIST
const getSingleArtist = async(id) =>{
    const response = await fetcher.get(`/users/singleUser?id=${id}`);
    return response;
}
// ADD USER
const addUser = async (form_data) => {
    const response = await fetcher.post(`/users/upload_user`, form_data);
    return response.data;
};
// UPDATE USER
const updateUser = async (data) => {
    const response = await fetcher.put(`/users/update_profile`, data);
    return response.data;
};
// LOG IN 
const log_in = async (data) =>{
    const response = await fetcher.post("/users/log_in",data)
    return response.data
}
// SEND MAIL
const sendMail = async (data) => {
    const response = await fetcher.post(`/mail`,data);
    return response.data;
};
// CITIES
const getCities = async (data) =>{
    const response = await fetcher.get("/cities",data);
    return response.data
}
// COUNTRIES
const getCountries = async (data) =>{
    const response = await fetcher.get("/countries");
    return response.data
}
// GENRE
const getGenre = async () =>{
    const response = await fetcher.get("/genre");
    return response.data
}
// SUB GENRE
const getSubGenre = async () =>{
    const response = await fetcher.get("/sub_genre");
    return response.data
}
// PROFESSION
const getProfession = async () =>{
    const response = await fetcher.get("/profession");
    return response.data
}
// POST LIKE
const PostLike = async (data) =>{
    const response = await fetcher.post("/users/post_like",data);
    return response.data
}

// GET ALL LIKED DONE BY USER
const GetAllLikesByUser = async (id) =>{
    const response = await fetcher.get(`/users/get_all_likes_by_user?id=${id}`);
    return response.data
}
// GET ALL LIKED DONE BY USER DOSENT LOGED
const GetAllLikesByUserLoged = async (id,FROMWHERTHEBUG) =>{
    const response = await fetcher.get(`/users/get_all_likes_by_user_DOSENT_LOGED?id=${id}`);
    return response.data
}

// REMOVE LIKE BY USER
const removeLikeByUser = async (id) =>{
    const response = await fetcher.put(`/users/remove_like_by_user?id=${id}`);
    return response.data
}
export{
    getAllArtist,
    getUsersFilterd,
    getSingleArtist,
    addUser,
    sendMail,
    log_in,
    getCities,
    getCountries,
    getGenre,
    getSubGenre,
    getProfession,
    updateUser,
    PostLike,
    GetAllLikesByUser,
    removeLikeByUser,
    GetAllLikesByUserLoged

}