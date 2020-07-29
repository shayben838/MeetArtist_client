import React, { useContext } from "react";
import "./user_header.css";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/auth/authContext";

import wave from "../../card_artist/wave.png";

const UserHeader = () => {
  const authContext = useContext(AuthContext);
  return (
    <div className='dropdown'>
      <button
        className=' wrap_component_user_headear'
        type='button'
        id='dropdownMenuButton'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'
      >
        <div className='wrap_image_header'>
          <img src={wave} className='image_header' alt='...' />
        </div>
        <span
          className=' navbar-dark navbar-nav nav-link'
          style={{ textTransform: "capitalize" }}
        >
          {authContext.user.first_name}
        </span>
        <i className='fas fa-chevron-down chevron-down'></i>
      </button>

      <div
        className='dropdown-menu drop_down'
        aria-labelledby='dropdownMenuButton'
      >
        <button type='button' className='dropdown-item' href=''>
          <Link
            to={`/singleArtist/${authContext.user.id}`}
            className='dropdown-item p-0'
          >
            Profile
          </Link>
        </button>
        {/* <button className="dropdown-item" href="/"> action</button>
                <button className="dropdown-item" href="#">Something </button> */}
        <button
          type='button'
          className='dropdown-item'
          href='#'
          onClick={() => authContext.logout()}
        >
          Log Out
        </button>

        {/* <li className="ml-1 nav-item">
                    <button style={{backgroundColor:"black"}} className="dropdown-item" href="#" onClick={logOut}>Log Out</button>
                </li> */}
      </div>
    </div>
  );
};
export default UserHeader;
