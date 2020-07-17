import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./header.css";
import { Link } from "react-router-dom";
import style from "../../style_main/style";
import UserHeader from "./user/user_header";

function Header({ user, logOut, dataAPI }) {
  let history = useHistory();

  // INIT
  let dataArr = dataAPI.users;
  let option = "display_name";
  let buttonName = "userHeadear";

  // AUTO COMPLITE MANUAL
  const [autoComplite, setAutoComplite] = useState(dataArr);
  const [lenAuto, setLenAuto] = useState(0);
  let data = dataArr;

  const onInputChange = ({ target: { name, value } }) => {
    let len = value.length;
    setLenAuto(len);
    const newData = data.filter(
      (item) => item[option].slice(0, len).toLowerCase() === value.toLowerCase()
    );
    setAutoComplite(newData);
  };
  // HISTORY PASS THE USER FROM SEARCH IN HEADEAR
  const onClicFilter = ({ name, value }) => {
    setLenAuto(0);
    document.getElementById("input_search_headear").value = "";
    history.push(`/singleArtist/${value.id}`);
  };
  return (
    <div className={"wrap_header"}>
      <nav
        style={{ backgroundColor: style.mainColor }}
        className='navbar navbar-expand-lg  fixed-top navbar-dark   wrap_header'
      >
        <Link to='/'>
          <span className='meet_artist_logo navbar-brand ' href='#'>
            MeetArtist
          </span>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            {!user && (
              <Link to='/log_in' className='headers_link'>
                <li className='nav-item '>
                  <span className='  nav-link' href='#'>
                    Sign In
                  </span>
                </li>
              </Link>
            )}
            {user && <UserHeader user={user} logOut={logOut} />}

            {!user && (
              <Link to='/SignUp' className='headers_link'>
                <li className='nav-item'>
                  <span className='nav-link' href='#'>
                    Sign Up
                  </span>
                </li>
              </Link>
            )}
            <Link to={"/search"} className='headers_link'>
              <li className='nav-link'>All Artist`s</li>
            </Link>
            {/* {user&&
                        <Link to="/chat" className="headers_link">
                            <li className="nav-link" >Chat</li>
                        </Link>
                        } */}

            <div className='d-none d-lg-block  wrap_search_hedear'>
              <div className='wrap_ul'>
                <div className='wrap_input'>
                  <input
                    id={"input_search_headear"}
                    className='input_drop_down'
                    placeholder='Search'
                    name={buttonName}
                    type='text'
                    onChange={onInputChange}
                    autoComplete='off'
                  />
                </div>
                {lenAuto > 0 && (
                  <div className='wrap_auto_headear pb-2'>
                    {autoComplite.map((item, key) => (
                      <button
                        onClick={() =>
                          onClicFilter({
                            name: "display_name",
                            value: { id: item.id, name: item[option] },
                          })
                        }
                        className='button_drop_down d-block'
                        id={item.id}
                        value={item[option]}
                        key={key}
                      >
                        <i className='fas fa-search'></i> {item[option]}{" "}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
