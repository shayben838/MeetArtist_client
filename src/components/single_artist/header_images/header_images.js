import React, { useState, useEffect, useContext, Fragment } from "react";
import coverImage from "../images/coverImage.jfif";
import "../wrap_single_artist.css";
import WrapEmailForm from "../email_form/wrap_email_form";
import WrapEditProfile from "../edit_profile/wrap_edit_profile copy";

import wave from "../../card_artist/wave.png";
import DataContext from "../../../context/Data/dataContext";
import AuthContext from "../../../context/auth/authContext";
import Loading from "../../loading/loading";
import { Link } from "react-router-dom";

const HeaderImages = () => {
  // context
  const authContext = useContext(AuthContext);
  const dataContext = useContext(DataContext);
  //
  const {
    singleUserPage,
    addLike,
    removeLike,
    checkIfHaveLike,
    haveLike,
  } = dataContext;
  const { user, userLikes, loadUser } = authContext;
  useEffect(() => {
    if (user) {
      checkIfHaveLike(userLikes, singleUserPage.id);
    }
    // eslint-disable-next-line
  }, [user]);

  // INIT
  const [emailForm, setEmailForm] = useState("");
  const closeEmailForm = () => {
    setEmailForm("");
  };
  // eslint-disable-next-line
  const add_like_and_update = async ({ user_id, from_user_id }) => {
    await addLike({
      user_id,
      from_user_id,
    });
    await loadUser();
  };
  const remove_like_and_update = async (userLikes, singleUserPage) => {
    await removeLike(userLikes, singleUserPage);
    await loadUser();
  };
  return (
    // <div>sd</div>
    <Fragment>
      {!singleUserPage ? (
        <Loading />
      ) : (
        <div>
          {emailForm && (
            <WrapEmailForm
              userLoged={user}
              closeEmailForm={closeEmailForm}
              user={singleUserPage}
            />
          )}
          <div className='cover_photo'>
            <div>
              <div style={{ height: "120px", width: "100%" }}>
                <img
                  src={coverImage}
                  className='cover_image'
                  alt='profile '
                  height='100%'
                  width='100%'
                />

                <div className='wrap_links_cover_image d-flex'>
                  <div>
                    {/* LIKES */}
                    {/* IF USER LOGGED : */}
                    {user && (
                      <Fragment>
                        {user.id !== singleUserPage.id && (
                          <Fragment>
                            {!haveLike && (
                              <i
                                className='fas fa-thumbs-up like_icon mr-2'
                                onClick={() =>
                                  add_like_and_update({
                                    user_id: singleUserPage.id,
                                    from_user_id: user.id,
                                  })
                                }
                              ></i>
                            )}
                            {haveLike && (
                              <i
                                className='fas fa-thumbs-down   like_icon mr-2 '
                                onClick={() =>
                                  remove_like_and_update(
                                    userLikes,
                                    singleUserPage.id
                                  )
                                }
                              ></i>
                            )}
                          </Fragment>
                        )}
                      </Fragment>
                    )}
                    {/* IF !USER */}
                    {!user && (
                      <Link to='/PermissionError'>
                        <i className='fas fa-thumbs-up like_icon mr-2'></i>
                      </Link>
                    )}

                    {/* {user.id !== singleUserPage.id && (
                      <i
                        className='fas fa-envelope email_button mr-2'
                        onClick={() => setEmailForm("open")}
                      ></i>
                    )} */}

                    {/* {!userLoged && (
                      <i
                        className='fas fa-envelope email_button mr-3'
                        onClick={() => setEmaillogged("open")}
                      ></i>
                    )} */}
                  </div>
                  {/* )} */}

                  {singleUserPage.sound_cloud && (
                    <a
                      className=' m-0 link_stream mr-1'
                      target='_blank'
                      rel='noopener noreferrer'
                      href={singleUserPage.sound_cloud}
                    >
                      <i className=' fab fa-soundcloud  '></i>
                    </a>
                  )}

                  {!singleUserPage.sound_cloud && (
                    <span
                      className=' m-0 link_stream mr-1'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i id='faNull' className=' fab fa-soundcloud  '></i>
                    </span>
                  )}
                  {singleUserPage.you_tube && (
                    <a
                      className='link_stream m-0 pl-2 mr-1'
                      href={singleUserPage.you_tube}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <i className=' fab fa-youtube '> </i>
                    </a>
                  )}
                  {!singleUserPage.you_tube && (
                    <span
                      className='link_stream m-0 pl-2 mr-1'
                      href={singleUserPage.you_tube}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <i id='faNull' className=' fab fa-youtube '>
                        {" "}
                      </i>
                    </span>
                  )}
                </div>
              </div>

              <div className='profil_photo'>
                <button className='p-0 wrap_profil_image_button'>
                  {/* <button onClick={() => setFullScreenImage("open")} className="p-0 wrap_profil_image_button"> */}
                  <img
                    src={wave}
                    className='profil_img'
                    alt='profile '
                    height='152px'
                    width='152px'
                  />
                </button>
              </div>
            </div>
          </div>
          {/* EDIT FORMS */}
          {user && (
            <Fragment>
              {user.id === singleUserPage.id && (
                <div>
                  {/* EDIT PROFILE */}
                  <div className=' '>
                    <WrapEditProfile
                      title='Edit Profile'
                      type={"personal_data_form"}
                      user={user}
                    />
                  </div>
                  {/* EDIT PROFESSION */}
                  {/* <div className=' '>
                    <WrapEditProfile
                      title='Edit Profession'
                      type={"music_data_form"}
                      user={user}
                    />
                  </div> */}
                </div>
              )}
            </Fragment>
          )}
          {/* {userLoged.id !== user.id && (
        <div className=' edit_profession_div' style={{ visibility: "hidden" }}>
          <h1>1</h1>
        </div>
      )} */}
        </div>
      )}
    </Fragment>
  );
};
export default HeaderImages;
