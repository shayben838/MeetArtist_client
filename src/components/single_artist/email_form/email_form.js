import React, { useState } from "react";
import "./emai_form.css"
import { sendMail } from "../../../back_end/api/api_action"
import Loading from "../../loading/loading";
import EmailSucsses from "./email_status/email_send_status";

function EmailForm({ user, closeEmailForm, userLoged }) {
    const [emailSend, setEmailSend] = useState("");
    const [mailMassege, setMailMassege] = useState("");
    const Data = {
        fullName: user.display_name, mail: user.email, name: user.name,
        emailContent: mailMassege, sound_cloud: user.sound_cloud, you_tube: user.you_tube, userId: user.id,
        from: userLoged
    }

    const sendEmail = async () => {
        setEmailSend("loading")
        const respons = await sendMail(Data);
        setEmailSend(respons.status)
        // alert(respons)
    }
    return (
        <div className="wrap_email_form ">
            <div>
                <div id="form_email_mobil" >
                    <i className="outForm fas fa-times" onClick={closeEmailForm}></i>
                    <div className="mobile_email_box" >
                        <div >
                            <h4 className="lead text_inner_box">New Message</h4>
                            <h4 style={{ textTransform: "capitalize" }}>To  {user.display_name} </h4>
                        </div>
                        <div className="wrap_text_area_email " >
                            <form method="POST" action="send" >
                                <textarea value={mailMassege} onChange={e => setMailMassege(e.target.value)}
                                    className="mt-3 mb-3 textarea_email" id="formControl_2353" rows="5"
                                    style={{ resize: "vertical" }}>
                                </textarea>
                                <div className="">
                                    <div className=" links_email">
                                        <span className="lead">your chaneles: &nbsp;</span>
                                        {user.sound_cloud &&
                                            <a className=" m-0 link_stream mr-1" target="_blank" rel="noopener noreferrer" href={user.sound_cloud}>
                                                <i id="icon_email_links" className=" fab fa-soundcloud  " ></i>
                                            </a>
                                        }
                                        {user.you_tube &&
                                            <a className="link_stream m-0 pl-2 mr-1" href={user.you_tube} target="_blank" rel="noopener noreferrer" >
                                                <i id="icon_email_links" className=" fab fa-youtube "> </i>
                                            </a>
                                        }
                                        <p className="lead"> Also added to the email </p>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="wrap_send_email_button mt-4">
                            <button onClick={sendEmail} className="email_send_button lead" type="submit">send</button>
                        </div>
                        <div className="" style={{ textAlign: "center" }}>
                            <p className="mt-5 mb-0 text-muted">© 2019-2020</p>
                            <p className="m-0 lead text-muted"> Meet Artist</p>
                        </div>
                    </div>
                </div>
            </div>
            {emailSend === "loading" &&
                <Loading />
            }
            {emailSend === "success" &&
                <EmailSucsses closeEmailForm={closeEmailForm} message ={"Email Send Successfully."}/>
            }
             {emailSend === "false" &&
                <EmailSucsses closeEmailForm={closeEmailForm} message ={"Somthing Went Wrong Please Try Later."}/>
            }
        </div>
    )
}

export default EmailForm;