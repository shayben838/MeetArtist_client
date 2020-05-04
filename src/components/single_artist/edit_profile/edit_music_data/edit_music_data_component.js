import React, { useState } from "react";
import "../wrap_edit_profile.css"
import AutoComplit from "../../../sing_up/sign_up_all_steps/auto_complit";
import InputErrors from "../../../validetor/input_errors"
import { updateUser } from "../../../../back_end/api/api_action"

function EditPersonalData({ user, dataAPI, onchange, onChangeAutoComplit, changeStatus, state }) {
    const [loading, setLoading] = useState("");
    const temporeryStudioArr = [{ id: 1, name: "Home Studio" }, { id: 2, name: "Rent Studio" }, { id: 3, name: "Professional Studio" }]
    const temporeryBookingArr = [{ id: 1, name: "Have Booking" }, { id: 2, name: "Not Have Booking" }]

    const registerAPI = async () => {
        const ToCheck = [state.age, state.booking, state.genre_id, state.sub_genre_id, state.studio];
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
                alert("all the changes was saved")
                window.location.reload();
            }
        }
    };



    console.log(dataAPI)

    let booking;
    let genre_id;
    let sub_genre_id;
    let studio;
    if (state.booking.value) { booking = parseInt(state.booking.value) }
    if (state.genre_id.value) { genre_id = parseInt(state.genre_id.value) }
    if (state.sub_genre_id.value) { sub_genre_id = parseInt(state.sub_genre_id.value) }
    if (state.studio.value) { studio = parseInt(state.studio.value) }

    return (
        <div className="wrap_edit_form">
            {loading ? <loading /> :
                <div className="iner_edit_box">
                    <h1 className="title lead p-2">Edit Profession </h1>
                    {/* INPUTS */}
                    <div className="wrap_inputs">

                        {/* AGE */}
                        <p className="m-0 pl-1 " style={{ letterSpacing: "0.1rem" }}>Age</p>
                        <div className="position-relative">
                            <input type="text" name="age" placeholder="Age" defaultValue={state.age.value}
                                className={"form-control mb-1"} onBlur={onchange} />
                            <span className="must_form_input">*</span>
                            <InputErrors errors={state.age.errors}> </InputErrors>
                        </div>

                        {/* BOOKING */}
                        <p className="m-0 pl-1 " style={{ letterSpacing: "0.1rem" }}>Booking</p>
                        <AutoComplit wrap_form_auto_style={"100%"} state={state} onChangeAutoComplit={onChangeAutoComplit} onchange={onchange} stateVal={booking} dataArr={temporeryBookingArr} option={"name"} placeholder={"Have Booking?"} InputName={"booking"} errors={state.booking.errors} />
                        {/* GENRE */}
                        <p className="m-0 pl-1 " style={{ letterSpacing: "0.1rem" }}>Genre</p>
                        <AutoComplit wrap_form_auto_style={"100%"} state={state} onChangeAutoComplit={onChangeAutoComplit} onchange={onchange} stateVal={genre_id} dataArr={dataAPI.genre.result} option={"name"} placeholder={"Genre"} InputName={"genre_id"} errors={state.genre_id.errors} />
                        {/* SUB GENRE */}
                        <p className="m-0 pl-1 " style={{ letterSpacing: "0.1rem" }}>Sub Genre</p>
                        {state.genre_id.value &&
                            < AutoComplit wrap_form_auto_style={"100%"} state={state} onChangeAutoComplit={onChangeAutoComplit} onchange={onchange} stateVal={sub_genre_id} dataArr={dataAPI.sub_genre.result.filter(item => item["genre_id"] === parseInt(state.genre_id.value))} option={"sub_name"} placeholder={"Sub Genre"} InputName={"sub_genre_id"} errors={state.sub_genre_id.errors} />
                        }
                        {/* STUDIO */}
                        <p className="m-0 pl-1 " style={{ letterSpacing: "0.1rem" }}>Studio</p>
                        <AutoComplit wrap_form_auto_style={"100%"} state={state} onChangeAutoComplit={onChangeAutoComplit} onchange={onchange} stateVal={studio} dataArr={temporeryStudioArr} option={"name"} placeholder={"Studio"} InputName={"studio"} errors={state.studio.errors} />
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