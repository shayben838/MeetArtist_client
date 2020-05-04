import React from "react";
import InputErrors from "../../validetor/input_errors"

import AutoComplit from "./auto_complit"
import "./auto_complete_sign_up.css"
import "../sign_up.css"

function StepTwo({ dataAPI, onchange, age, city_id, country_id, state, onChangeAutoComplit }) {

    const arrLoop = ["age"];
    const arrLoopPlaceOrder = ["Age"];
    const arr = [age];

    return (
        <div>
            {/* AGE */}
            {arrLoop.map((singleState, index) =>
                <div key={index}>
                    <div className="position-relative">
                        <input type="text" name={singleState} placeholder={arrLoopPlaceOrder[index]} id={singleState} defaultValue={state[singleState].value}
                            className={"form-control mb-1"} onBlur={onchange} />
                                            <span className="must_form_input">*</span>
                        <InputErrors errors={arr[index]}> </InputErrors>
                    </div>
                </div>
            )}

            {/* COUNTRIES */}
            <AutoComplit optionType="button_drop_down_sign_up"   onChangeAutoComplit={onChangeAutoComplit} onchange={onchange} stateVal={state.country_id.value} dataArr={dataAPI.countries.result} option={"name"} placeholder={"Country"} InputName={"country_id"} errors={country_id} />
            {/*CITIES  */}
            {state.country_id.value &&
                <AutoComplit optionType="button_drop_down_sign_up" onChangeAutoComplit={onChangeAutoComplit} onchange={onchange} stateVal={state.city_id.value} dataArr={dataAPI.cities.result.filter(item => item["country_id"] === state.country_id.value)} option={"name"} placeholder={"City"} InputName={"city_id"} errors={city_id} />
            }
        </div>
    )
}
export default StepTwo;