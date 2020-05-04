import React from "react";
import "./permission.css"


function PermissionEmail({ setEmaillogged }) {
    return (
        <div className="pb-5 wrap_page_image_full_screen">
            <div className="pb-5 d-flex h-100  justify-content-center  align-items-center ">
                <div className="wrap_message_permission" style={{ color: "white" }}>
                    <h1 className="featurette-heading">
                        
                        This Operation Is Valid Just For Users
                        </h1>

                    <div className="pt-5 pb-4  d-flex h-100  justify-content-center  align-items-center ">
                        <a href="/SignUp" className="d-flex links_permission_sign_in" style={{ textAlign: "center" }}>
                            <h6 className="lead log_title"> Sign Up</h6>
                            <i href="/log_in" className="icon_sign_in fas fa-sign-in-alt"></i>

                        </a>
                    </div>



                    <div className="pt-2 d-flex h-100  justify-content-center  align-items-center ">
                            <a href="/log_in" className="d-flex links_permission_sign_in" style={{ textAlign: "center" }}>
                                <h6 className="lead log_title"> Log In</h6>
                                <i href="/log_in" className="icon_sign_in fas fa-sign-in-alt"></i>
                            </a>
                    </div>

                  


                </div>

            </div>

            <i onClick={() => setEmaillogged("")} id="outFormImageFull" className="mt-5 outForm fas fa-times"></i>

        </div>
    )
};

export default PermissionEmail;