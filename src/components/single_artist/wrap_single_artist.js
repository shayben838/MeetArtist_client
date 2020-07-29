import React, { useEffect, useContext, Fragment } from "react";
import { useParams } from "react-router";

import HeaderImages from "./header_images/header_images";
import MemberDescription from "./member_description";
import Loading from "../loading/loading";
import WrapLikesList from "./artist_likes_list/wrap_likes_list";
import AuthContext from "../../context/auth/authContext";
import DataContext from "../../context/Data/dataContext";

const WrapSingleArtist = () => {
  let { id } = useParams();

  //CONTEXT
  const authContext = useContext(AuthContext);
  const dataContext = useContext(DataContext);
  //
  useEffect(() => {
    authContext.loadUser();
    dataContext.loadData();
    dataContext.getSingleUserPage(id);
    // eslint-disable-next-line
  }, []);

  const user = dataContext.singleUserPage;
  return (
    <div>
      {!user || !dataContext.users ? (
        <Loading />
      ) : (
        <div
          className=''
          style={{ minHeight: "calc(100vh - 207px)", marginTop: "3.5rem" }}
        >
          <HeaderImages />

          <div className='row m-0'>
            <div className='col-12 col-md-8'>
              <MemberDescription />
            </div>

            <Fragment>
              {true && (
                <div className='wrap_right_nav_bar col-12 col-md-4'>
                  <WrapLikesList />
                </div>
              )}
            </Fragment>
          </div>
        </div>
      )}
    </div>
  );
};
export default WrapSingleArtist;
