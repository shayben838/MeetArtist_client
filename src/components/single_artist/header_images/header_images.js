import React, { useState, useEffect } from "react";
import coverImage from "../images/coverImage.jfif"
import "../wrap_single_artist.css"
import WrapEmailForm from "../email_form/wrap_email_form";
import ProfileImageFullScreen from "./profile_image_full_screen";
import PermissionEmail from "../../permission/permission";
import WrapEditProfile from "../edit_profile/wrap_edit_profile";
import { PostLike } from "../../../back_end/api/api_action";
import { GetAllLikesByUser } from "../../../back_end/api/api_action";
import { GetAllLikesByUserLoged } from "../../../back_end/api/api_action";
import { removeLikeByUser } from "../../../back_end/api/api_action";

function useFetch(userLoged, user) {
    const [userLikes, setUserLikes] = useState("");

    const importUser = async () => {
        let userLikes
        if (userLoged === false) {
            userLikes = await GetAllLikesByUserLoged(user.id, "headear images");
        }
        else {
            userLikes = await GetAllLikesByUser(userLoged.id);
        }
        const matchLike = userLikes.result.filter((item) => item.user_id === user.id);
        let haveLike;
        if (matchLike) {
            if (matchLike.length > 0) { haveLike = "true" }
            else { haveLike = "false" }
        }
        setUserLikes({ userLikes, matchLike, haveLike: haveLike })
    }
    useEffect(() => { importUser() }, [userLoged.id])
    return userLikes
}

function HeaderImages({ user, userLoged, dataAPI }) {
    // INIT
    const [emaillogged, setEmaillogged] = useState("");
    const [emailForm, setEmailForm] = useState("");
    const closeEmailForm = () => { setEmailForm("") }
    const [fullScreenImage, setFullScreenImage] = useState("");
    // USE FETCH
    const likes = useFetch(userLoged, user);

    const like = async () => {
        const result = await PostLike({ user_id: user.id, from_user_id: userLoged.id });
        // change the reload by component will update || change state
        window.location.reload();

    }
    const removeLike = async () => {
        const result = await removeLikeByUser(likes.matchLike[0].id);
        // change the reload by component will update || change state
        window.location.reload();

    }
    return (
        <div>
            {emailForm && <WrapEmailForm userLoged={userLoged} closeEmailForm={closeEmailForm} user={user} />}
            <div className="cover_photo">
                <div >
                    <div style={{ height: "120px", width: "100%" }}>

                        <img src={coverImage} className="cover_image" alt="profile image" height="100%" width="100%" />

                        <div className="wrap_links_cover_image d-flex">
                            {(userLoged.id !== user.id) &&
                                <div>
                                    {(userLoged && likes.haveLike === "false") &&
                                        <i  className="fas fa-thumbs-up like_icon mr-2" onClick={() => like()}></i>
                                    }
                                    {(userLoged && likes.haveLike === "true") &&
                                        <i className="fas fa-thumbs-down   like_icon mr-2 " onClick={() => removeLike()}></i>
                                    }

                                    {userLoged &&
                                        <i className="fas fa-envelope email_button mr-2" onClick={() => setEmailForm("open")} ></i>
                                    }
                                    {!userLoged &&
                                        <i className="fas fa-envelope email_button mr-3" onClick={() => setEmaillogged("open")}></i>
                                    }
                                </div>
                            }
                            <a className=" m-0 link_stream mr-1" target="_blank" rel="noopener noreferrer" href={user.sound_cloud}>
                                <i className=" fab fa-soundcloud  " ></i>
                            </a>

                            <a className="link_stream m-0 pl-2 mr-1" href={user.you_tube} rel="noopener noreferrer" target="_blank" >
                                <i className=" fab fa-youtube "> </i>
                            </a>
                        </div>
                    </div>

                    {/* need to add the real image from the DB */}
                    <div className="profil_photo">
                        <button onClick={() => setFullScreenImage("open")} className="p-0 wrap_profil_image_button">
                            <img src={"http://localhost:5000/" + user.profile_image} className="profil_img" alt="profile image" height="152px" width="152px" />
                        </button>
                    </div>
                </div>
            </div>
            {/* EDIT FORMS */}
            {userLoged.id === user.id &&
                <div>
                    {/* EDIT PROFILE */}
                    <div className=" ">
                        <WrapEditProfile title="Edit Profile" type={"personal_data_form"} user={user} dataAPI={dataAPI} />
                    </div>
                    {/* EDIT PROFESSION */}
                    <div className=" ">
                        <WrapEditProfile title="Edit Profession" type={"music_data_form"} user={user} dataAPI={dataAPI} />
                    </div>
                </div>
            }
            {userLoged.id !== user.id &&
                <div className=" edit_profession_div" style={{ visibility: "hidden" }}>
                    <h1>1</h1>
                </div>
            }

            {fullScreenImage &&
                <ProfileImageFullScreen src={"http://localhost:5000/" + user.profile_image} setFullScreenImage={setFullScreenImage} />
            }
            {emaillogged &&
                <PermissionEmail setEmaillogged={setEmaillogged} />
            }

        </div>
    )
}
export default HeaderImages;