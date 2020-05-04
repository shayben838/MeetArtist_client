import React from "react";

function EmailSucsses({closeEmailForm,message}) {
    // const success = "Email Send Successfully."
    // const errore = "Somthing Went Wrong Please Try Later."
    return (
        <div>
            <div className="pb-5 wrap_page_image_full_screen">
                <div className="pb-5 d-flex h-100  justify-content-center  align-items-center ">
                    <div className="wrap_message_permission" style={{ color: "white" }}>
                        <h1 className="featurette-heading">
                            {message}
                    </h1>
                    </div>
                </div>
                <i onClick={() => closeEmailForm()} id="outFormImageFull" className="mt-5 outForm fas fa-times"></i>
            </div>

        </div >

    )
}
export default EmailSucsses;