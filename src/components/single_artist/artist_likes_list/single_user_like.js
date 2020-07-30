import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./wrap_likes_list.css";
import wave from "../../card_artist/wave.png";
import DataContext from "../../../context/Data/dataContext";

const SingleUserLike = ({ user }) => {
  const dataContext = useContext(DataContext);

  const city = dataContext.cities.filter((item) => item.id === user.city_id)[0]
    .name;
  return (
    <li className='li_likes'>
      <Link to={`/singleArtist/${user.id}`} className='link_liks_list'>
        <div className='row m-0'>
          <div className='col-auto p-0'>
            <img className=' image_lists_of_likes' src={wave} alt='...' />

            {/* <img className=" image_lists_of_likes" src={"http://localhost:5000/" + user.profile_image} alt="..." /> */}
          </div>
          <div className='col-auto wrap_name_headline'>
            <p className='m-0 user_name_like '>{user.display_name}</p>
            <p className='m-0'>{city}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};
export default SingleUserLike;
