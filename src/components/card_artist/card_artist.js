import React, { useContext } from "react";
import "./card_artist.css";
import mainColor from "../../style_main/style";
import { Link } from "react-router-dom";
import wave from "./wave.png";
import DataContext from "../../context/Data/dataContext";
const styleCard = {
  wrap: "col-12  col-sm-6 col-lg-3 mb-2 ",
  inner: "card mr-auto ml-auto",
};

const CardArtist = ({ user }) => {
  const dataContext = useContext(DataContext);
  const { profession, countries, genre } = dataContext;
  // PROFESSION
  const profession_ = profession.filter(
    (item) => item.id === user.professions
  )[0].name;
  // COUNTRY
  const country_ = countries
    .filter((item) => item.id === user.country_id)[0]
    .name.toUpperCase();
  // GENRE
  const genre_ = genre.filter((item) => item.id + "" === user.genre_id)[0].name;
  return (
    <div
      className={styleCard.wrap}
      style={{
        marginTop: "30px",
        display: "inline",
        justifyContent: "center",
      }}
    >
      <div className={styleCard.inner} style={{ width: "15rem" }}>
        <div>
          <img
            src={wave}
            className='card-img-top'
            alt='...'
            height='200'
            width='100%'
          />
        </div>
        <div className='card-body'>
          <h5
            className='card-title lead mb-1'
            style={{ textTransform: "capitalize" }}
          >
            <i className='icons icon_user_card  far fa-user'></i>{" "}
            {user.display_name}
          </h5>
          <p className='m-0 ' style={{ textTransform: "capitalize" }}>
            <i className='icons fas fa-award icon_profession_card'></i>
            {profession_}
          </p>
          <p className='m-0' style={{ textTransform: "capitalize" }}>
            <i className='  mr-2 icons  fas fa-headphones-alt'></i>
            {genre_}
          </p>
          <p className='m-0 '>
            <i className='icons  fas fa-map-marker-alt  icon_country_card'></i>
            {country_}
          </p>
          <Link to={"/singleArtist/" + user.id}>
            <span
              href='#'
              className='mt-1 btn btn-primary'
              style={{
                borderColor: mainColor.mainColor,
                background: mainColor.mainColor,
              }}
            >
              Profile
            </span>
          </Link>

          <div className='wrap_links'>
            {user.you_tube && (
              <a className='link_stream m-0 pl-2 mr-1' href={user.you_tube}>
                <i id='fyt' className='fab fa-youtube '>
                  {" "}
                </i>
              </a>
            )}
            {!user.you_tube && (
              <span className='link_stream m-0 pl-2 mr-1'>
                <i id='fscNull' className='fab fa-youtube '>
                  {" "}
                </i>
              </span>
            )}

            {user.sound_cloud && (
              <a
                className=' m-0 link_stream mr-1'
                target='_blank'
                rel='noopener noreferrer'
                href={user.sound_cloud}
              >
                <i id='fsc' className='fab fa-soundcloud '></i>
              </a>
            )}
            {!user.sound_cloud && (
              <span
                className=' m-0 link_stream mr-1'
                target='_blank'
                rel='noopener noreferrer'
                href={user.sound_cloud}
              >
                <i id='fscNull' className='fab fa-soundcloud '></i>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardArtist;
