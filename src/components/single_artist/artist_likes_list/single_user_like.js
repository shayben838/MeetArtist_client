import React from "react";
import { Link } from "react-router-dom";
import "./wrap_likes_list.css"

function SingleUserLike({user}) {
    return (
        <li className="li_likes">
            <Link to={`/singleArtist/${user.id}`}className="link_liks_list"  >
                <div className="row m-0">
                    <div className="col-auto p-0">
                        <img className=" image_lists_of_likes" src={"http://localhost:5000/" + user.profile_image} alt="..." />
                    </div>
                    <div className="col-auto wrap_name_headline">
                        <p className="m-0 user_name_like ">{user.display_name}</p>
                        <p className="m-0">{user.headline}</p>
                    </div>
                </div>
            </Link>
        </li>
    )
}
export default SingleUserLike;