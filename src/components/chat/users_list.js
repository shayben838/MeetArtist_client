import React, { useState, useEffect } from "react";

import "./css/style.css"
import "../header/header.css"
import SingleUserLike from "../single_artist/artist_likes_list/single_user_like";


const UsersList = ({ users,setUsersList }) => {
    return (
        <div className="">
            <div className="wrap_log_in " style={{ zIndex: 11 }}>
            <i id="out_log_in" className="outForm fas fa-times" onClick={()=>setUsersList("")}></i>
                <div style={{height:"500px"}}>
                <div className=" mt-3 ">
                    <h4 style={{letterSpacing:".6rem",marginBottom:"50px"}}>Users Conected To Chat</h4>
                    <ul className="m-0 p-0 ">
                        {users.map((user, index) =>
                            <div>
                                <h6 className="m-2 mb-4" style={{letterSpacing:".6rem"}}><i className="fas fa-user"></i>{"  "}{user.username}</h6>
                            </div>
                            )
                        }
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

export default UsersList;
