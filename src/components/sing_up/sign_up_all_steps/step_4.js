import React from "react";
import InputErrors from "../../validetor/input_errors"
import AutoComplit from "./auto_complit";

function StepThree({ onchange, dataAPI, onChangeAutoComplit, state, profession, studio, genre, sub_genre, booking, sound_cloud, you_tube }) {
    const keys = ["sound_cloud", "you_tube",];
    const values = [sound_cloud, you_tube];
    const temporeryStudioArr = [{ id: 1, name: "Home Studio" }, { id: 2, name: "Rent Studio" }, { id: 3, name: "Professional Studio" }]
    const temporeryBookingArr = [{ id: 1, name: "Have Booking" }, { id: 2, name: "Not Have Booking" }]
    return (
        <div>

            {keys.map((singleState, index) =>
                <div className="position-relative">
                    <input key={index} type="text" name={singleState} placeholder={singleState} id={singleState} defaultValue={state[singleState].value}
                        className={"form-control mb-1"} onBlur={onchange} />
                    <span className="must_form_input">*</span>
                    <InputErrors errors={values[index]}> </InputErrors>
                </div>
            )}
            {/* BOOKING */}
            <AutoComplit optionType="button_drop_down_sign_up" state={state} onChangeAutoComplit={onChangeAutoComplit} onchange={onchange} stateVal={state.booking.value} dataArr={temporeryBookingArr} option={"name"} placeholder={"Have Booking?"} InputName={"booking"} errors={booking} />
            {/* PROFESSION */}
            {state.booking.value &&
                <AutoComplit optionType="button_drop_down_sign_up" state={state} onChangeAutoComplit={onChangeAutoComplit} onchange={onchange} stateVal={state.profession.value} dataArr={dataAPI.profession.result} option={"name"} placeholder={"Profession"} InputName={"profession"} errors={profession} />
            }
            {/* GENRE */}
            {state.profession.value &&
                <AutoComplit optionType="button_drop_down_sign_up" state={state} onChangeAutoComplit={onChangeAutoComplit} onchange={onchange} stateVal={state.genre.value} dataArr={dataAPI.genre.result} option={"name"} placeholder={"Genre"} InputName={"genre"} errors={genre} />
            }
            {/* SUB GENRE */}
            {state.genre.value &&
                <AutoComplit optionType="button_drop_down_sign_up" state={state} onChangeAutoComplit={onChangeAutoComplit} onchange={onchange} stateVal={state.sub_genre.value} dataArr={dataAPI.sub_genre.result.filter(item => item["genre_id"] === state.genre.value)} option={"sub_name"} placeholder={"Sub Genre"} InputName={"sub_genre"} errors={sub_genre} />
            }
            {/* STUDIO */}
            {state.sub_genre.value &&
                <AutoComplit optionType="button_drop_down_sign_up" state={state} onChangeAutoComplit={onChangeAutoComplit} onchange={onchange} stateVal={state.studio.value} dataArr={temporeryStudioArr} option={"name"} placeholder={"Studio"} InputName={"studio"} errors={studio} />
            }
        </div>
    )
}
export default StepThree;