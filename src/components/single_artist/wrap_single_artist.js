import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";

import HeaderImages from "./header_images/header_images";
import MemberDescription from "./member_description";
import { getSingleArtist } from "../../back_end/api/api_action";
import Loading from "../loading/loading";
import WrapLikesList from "./artist_likes_list/wrap_likes_list";

// do not toche the code below:
function useFetch() {
  const [user, setUser] = useState("");
  let { id } = useParams();
  const importUser = async () => {
    const user = await getSingleArtist(id);
    await setUser(user);
  };
  useEffect(() => {
    importUser();
    // eslint-disable-next-line
  }, []);
  return user;
}

function WrapSingleArtist(data) {
  // const NewdataAPI =data.dataAPI[0]
  const userLoged = data.user;
  const user = useFetch();

  return (
    <div>
      {!user ? (
        <Loading />
      ) : (
        <div
          className=''
          style={{ minHeight: "calc(100vh - 207px)", marginTop: "3.5rem" }}
        >
          <HeaderImages
            userLoged={userLoged}
            user={user.data.result[0]}
            dataAPI={data.dataAPI[0]}
          />
          <div className='row m-0'>
            <div className='col-12 col-md-8'>
              <MemberDescription
                dataAPI={data.dataAPI[0]}
                user={user.data.result[0]}
              />
            </div>
            {userLoged.id === user.data.result[0].id && (
              <div className='wrap_right_nav_bar col-12 col-md-4'>
                <WrapLikesList
                  dataAPI={[data.dataAPI]}
                  user={user.data.result[0]}
                  whichUser={userLoged}
                  userLoged={userLoged}
                  title='Artists You Like'
                />
              </div>
            )}

            {(!userLoged.id || userLoged.id !== user.data.result[0].id) && (
              <div className='wrap_right_nav_bar col-12 col-md-4'>
                <WrapLikesList
                  dataAPI={[data.dataAPI]}
                  whichUser={user.data.result[0]}
                  userLoged={userLoged}
                  title={`${user.data.result[0].display_name} Likes :`}
                />
              </div>
            )}

            {/* {!userLoged.id &&
                            <div className="wrap_right_nav_bar col-12 col-md-4">
                                {alert("3")}
                                <WrapLikesList whichUser={user.data.result[0]} userLoged={userLoged} title={`${user.data.result[0].display_name} Likes`} />
                            </div>
                        } */}
          </div>
        </div>
      )}
    </div>
  );
}

/** REDUX */
const MapStateToProps = (state) => ({ user: state.user });

export default connect(MapStateToProps)(WrapSingleArtist);
