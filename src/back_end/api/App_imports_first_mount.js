import {getCities} from "./api_action"
import {getCountries} from "./api_action"
import {getAllArtist} from "./api_action"
import {getGenre} from "./api_action"
import {getSubGenre} from "./api_action"
import {getProfession} from "./api_action"

const importsMainAPI = async () =>{
    const cities = await getCities();
    const countries = await getCountries();

    const users = await getAllArtist();
    const genre = await getGenre();
    const sub_genre= await getSubGenre();
    const profession = await getProfession();

    return {cities,countries,users,genre,sub_genre,profession}
}

export {importsMainAPI};