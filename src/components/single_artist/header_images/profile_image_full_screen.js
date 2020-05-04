import React from "react";
import "../wrap_single_artist.css"





function ProfileImageFullScreen({ src, setFullScreenImage }) {
    return (
        <div className="pb-5 wrap_page_image_full_screen" onClick={()=> setFullScreenImage("")}>
            <div className="pb-5 d-flex h-100  justify-content-center  align-items-center ">
                <img src={src} className="rounded-circle" alt="profile image" height="300px" width="300px" />
            </div>
            
                <i onClick={() => setFullScreenImage("")} id="outFormImageFull" className="mt-5 outForm fas fa-times"></i>
            
        </div>
    )
}

export default ProfileImageFullScreen;