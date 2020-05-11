import React from "react"
import "./card_artist.css"
import mainColor from "../../style_main/style"
import { Link } from "react-router-dom";



function CardArtist({ styleCard, user, dataAPI }) {
    const profession = dataAPI.profession.result.filter(item => item.id === user.professions)[0].name;
    const country = dataAPI.countries.result.filter(item => item.id === user.country_id)[0].name.toUpperCase();
    const city = dataAPI.cities.result.filter(item => item.id === user.city_id)[0].name;
    const genre = dataAPI.genre.result.filter(item => item.id + "" === user.genre_id)[0].name;
    const sub_genre = dataAPI.sub_genre.result.filter(item => item.id + "" === user.sub_genre_id);
    // const sub_genre = dataAPI.sub_genre.result.filter(item => item.id + "" === user.sub_genre_id)[0].sub_name;
    console.log(sub_genre)



    return (
        <div className={styleCard.wrap} style={{ marginTop: "30px" }}>
            <div className={styleCard.inner} style={{ width: "15rem" }}>
                <div>
                    {/* here need to change to the real image of the user */}
                    <img src={"http://localhost:5000/" + user.profile_image} className="card-img-top" alt="..." height="200" width="100%" />
                </div>
                <div className="card-body">

                    <h5 className="card-title lead mb-1" style={{ textTransform: "capitalize" }}><i className="icons icon_user_card  far fa-user"></i> {user.display_name}</h5>
                    <p className="m-0 " style={{ textTransform: "capitalize" }}><i className="icons fas fa-award icon_profession_card"></i>{profession}</p>
                    <p className="m-0" style={{ textTransform: "capitalize" }}><i className="  mr-2 icons  fas fa-headphones-alt"></i>{genre}</p>
                    <p className="m-0 "><i className="icons  fas fa-map-marker-alt  icon_country_card"></i>{country}</p>
                    <Link to={"/singleArtist/" + user.id}>
                        <span href="#" className="mt-1 btn btn-primary" style={{ borderColor: mainColor.mainColor, background: mainColor.mainColor }}>Profile</span>
                    </Link>

                    <div className="wrap_links">
                        <a className="link_stream m-0 pl-2 mr-1" href={user.you_tube}>
                            <i id="fyt" className="fab fa-youtube "> </i>
                        </a>
                        <a className=" m-0 link_stream mr-1" target="_blank" rel="noopener noreferrer" href={user.sound_cloud}>
                            <i id="fsc" className="fab fa-soundcloud " ></i>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default CardArtist;


