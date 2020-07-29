import React, { useContext, Fragment } from "react";
import "./wrap_likes_list.css";
import SingleUserLike from "./single_user_like";
import DataContext from "../../../context/Data/dataContext";
import AuthContext from "../../../context/auth/authContext";
const WrapLikesList = () => {
  // NEW CONTEXT
  const authContext = useContext(AuthContext);
  const dataContext = useContext(DataContext);
  const { user } = authContext;
  const { likesBySingleUser, singleUserPage } = dataContext;
  return (
    <div>
      {likesBySingleUser && (
        <div className='container mt-3 container_likes_list'>
          {/* user !logged */}
          {!user && (
            <h1 className='lead title_likes'>{`${singleUserPage.display_name} favorit artists`}</h1>
          )}

          {/* user logged */}
          {user && (
            <Fragment>
              {singleUserPage.id === user.id && (
                <h1 className='lead title_likes'>{"Your favorits artists"}</h1>
              )}
              {singleUserPage.id !== user.id && (
                <h1 className='lead title_likes'>{`${singleUserPage.display_name} favorit artists`}</h1>
              )}
            </Fragment>
          )}
          <ul className='m-0 p-0 ul_likes'>
            {likesBySingleUser.map((item, index) => (
              <SingleUserLike user={item} key={index} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WrapLikesList;
