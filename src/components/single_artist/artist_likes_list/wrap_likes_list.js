import React, { useState, useEffect } from "react";
import "./wrap_likes_list.css"
import { GetAllLikesByUser } from "../../../back_end/api/api_action";
import { GetAllLikesByUserLoged } from "../../../back_end/api/api_action";
import SingleUserLike from "./single_user_like";

{/* <WrapLikesList whichUser={user.data.result[0]} 
userLoged={userLoged} title={`${user.data.result[0].display_name} Likes`} /> */}


function useFetch(userLoged, user) {
    const [userLikes, setUserLikes] = useState("");
    const importUser = async () => {
        
        let userLikes;
        if (userLoged === false) {
             userLikes = await GetAllLikesByUser(user.id,"WRAP Like list");
        }
        else {
             userLikes = await GetAllLikesByUser(userLoged.id);
        }
        setUserLikes({ userLikes, })
    }
    useEffect(() => { importUser() }, [])
    return userLikes
}



function WrapLikesList({ title, whichUser, user,dataAPI }) {
    console.log({ title, whichUser, user,dataAPI })
    const newDataApi = dataAPI[0]
    const allLiks = useFetch(whichUser, user);
    let titleParam = title
    if (allLiks.userLikes) {
        if (allLiks.userLikes.allUsers.length === 0) { titleParam = `${whichUser.display_name} Not Have Artist That He Like Yet` }
    }
    return (
        <div>
            {allLiks.userLikes &&
                <div className="container mt-3 container_likes_list">
                    <h1 className="lead title_likes">{titleParam}</h1>
                    <ul className="m-0 p-0 ul_likes">
                        {allLiks.userLikes.allUsers.map((item, index) =>
                            <SingleUserLike user={item} key={index} dataAPI={newDataApi}/>
                            )
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default WrapLikesList;