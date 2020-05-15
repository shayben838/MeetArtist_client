import React, { useState } from "react";
import { Redirect } from "react-router";
import "../wrap_edit_profile.css"
import AutoComplit from "../../../sing_up/sign_up_all_steps/auto_complit";
import InputErrors from "../../../validetor/input_errors"
import { updateUser } from "../../../../back_end/api/api_action"

function EditPersonalData({ user, dataAPI, onchange, onChangeAutoComplit, changeStatus, state }) {
    const [loading, setLoading] = useState("");
    const[changeData,setChangeData] =useState("")
    const registerAPI = async () => {
        const ToCheck = [state.display_name, state.headline, state.professions, state.country_id, state.city_id];
        const ifNoErrors = ToCheck.filter(item => item.errors.length > 0).length;
        const result = { id: user.id };
        if (ifNoErrors === 0) {
            for (let prop in state) {
                if (prop === "formStatus" || prop === "main_image") { continue }
                result[prop] = state[prop].value;
            }
            setLoading('open');
            const resultAPI = await updateUser(result);
            setLoading("");
            if (resultAPI.user === "false") {
                alert("error")
            }
            else {
                // console.log(user.id)
                alert("!!!!!All The Changes Was Saved ")
                setChangeData("close")
                // window.location.href = `https://infallible-agnesi-f06595.netlify.app/singleArtist/${user.id}`;
                // alert("all the changes was saved")
                // window.location.reload();
            }
        }
    };




    return (
        <div className="wrap_edit_form">
                        {changeData && <Redirect to={`/singleArtist/${user.id}`} />}

            {loading ? <loading /> :
                <div className="iner_edit_box">
                    <h1 className="title lead p-2">Edit Personal Data</h1>
                    {/* INPUTS */}
                    <div className="wrap_inputs">

                        {/* DISPLAY NAME */}
                        <p className="m-0 pl-1 " style={{ letterSpacing: "0.1rem" }}>Display Name</p>
                        <div className="position-relative">
                            <input type="text" name="display_name" placeholder="Display Name" id="display_name" defaultValue={state.display_name.value}
                                className={"form-control mb-1"} onBlur={onchange} />
                            <span className="must_form_input">*</span>
                            <InputErrors errors={state.display_name.errors}> </InputErrors>
                        </div>

                        {/* HEADLINE */}
                        <p className="m-0 pl-1 " style={{ letterSpacing: "0.1rem" }}>HeadLine</p>
                        <div className="position-relative">
                            <input type="text" name="headline" placeholder="Headline" defaultValue={state.headline.value}
                                className={"form-control mb-1"} onBlur={onchange} />
                            <span className="must_form_input">*</span>
                            <InputErrors errors={state.headline.errors}> </InputErrors>
                        </div>

                        {/* PROFESSION */}
                        <p className="m-0 pl-1 " style={{ letterSpacing: "0.1rem" }}>Profession</p>
                        <AutoComplit wrap_form_auto_style={"100%"} state={state} onChangeAutoComplit={onChangeAutoComplit} onchange={onchange} stateVal={state.professions.value} dataArr={dataAPI.profession.result} option={"name"} placeholder={"Profession"} InputName={"professions"} errors={state.professions.errors} />

                        {/* COUNTRIES */}
                        <p className="m-0 pl-1 " style={{ letterSpacing: "0.1rem" }}>Country</p>
                        <AutoComplit wrap_form_auto_style={"100%"} state={state} onChangeAutoComplit={onChangeAutoComplit} onchange={onchange} stateVal={state.country_id.value} dataArr={dataAPI.countries.result} option={"name"} placeholder={"Country"} InputName={"country_id"} errors={state.country_id.errors} />

                        {/*CITIES  */}
                        <p className="m-0 pl-1 " style={{ letterSpacing: "0.1rem" }}>City</p>
                        {state.country_id.value &&
                            <AutoComplit wrap_form_auto_style={"100%"} onChangeAutoComplit={onChangeAutoComplit} onchange={onchange} stateVal={state.city_id.value} dataArr={dataAPI.cities.result.filter(item => item["country_id"] === state.country_id.value)} option={"name"} placeholder={"City"} InputName={"city_id"} errors={state.city_id.errors} />
                        }

                    </div>

                    {/* OUT FORM */}
                    <i onClick={() => changeStatus("formStatus", "close")} id="icon_out_edit" className="outForm fas fa-times" ></i>
                    <button className="submit_button" type="'button" onClick={() => registerAPI()}> Save</button>
                </div>
            }
        </div>
    )
}
export default EditPersonalData;