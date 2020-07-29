import React, { useContext, useState, useEffect } from "react";
import "./wrap_edit_profile.css";
import EditPersonalData from "./edit_personal_data/edit_personal_data_component";
import EditMusicData from "./edit_music_data/edit_music_data_component";

import SignUpContext from "../../../context/SignUp/SignUpContext";
import AuthContext from "../../../context/auth/authContext";

const WrapEditProfile = () => {
  const [formStatus, setFormStatus] = useState({ status: "", type: "" });
  const signUpContext = useContext(SignUpContext);
  const authContext = useContext(AuthContext);

  //
  useEffect(() => {
    signUpContext.setStateForUpdate(authContext.user);
  }, [authContext.user]);
  return (
    <div>
      {/*EDIT PERSONAL*/}
      <div>
        <button
          title={`PERSONAL DATA`}
          onClick={() => setFormStatus({ status: "open", type: "personal" })}
          className='pencil_edit_button '
        >
          <i className='fas fa-pencil-alt'></i>
        </button>
      </div>
      {/*EDIT MUSIC*/}
      <div>
        <button
          title={`MUSIC INFO`}
          onClick={() => setFormStatus({ status: "open", type: "music info" })}
          className='pencil_edit_button '
        >
          <i className='fas fa-pencil-alt'></i>
        </button>
      </div>

      {/* PERSONAL DATA */}
      {formStatus.type === "personal" && formStatus.status === "open" && (
        <EditPersonalData setFormStatus={setFormStatus} />
      )}

      {/* MUSIC DATA */}
      {formStatus.type === "music info" && formStatus.status === "open" && (
        <EditMusicData setFormStatus={setFormStatus} />
      )}
    </div>
  );
};
export default WrapEditProfile;
