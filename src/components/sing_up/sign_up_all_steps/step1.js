import React from "react";
import InputErrors from "../../validetor/input_errors"
import "../sign_up.css"

function StepOne({ onchange, display_name, state, email, password }) {
    return (
        <div >
            <div className="position-relative">
                <input type="email" name="email" placeholder="Email" id="Email" defaultValue={state.email.value}
                    className={"form-control mb-1"} onBlur={onchange} />
                <span className="must_form_input">*</span>
                <InputErrors errors={email}> </InputErrors>
            </div>
            <div className="position-relative">
                <input type="password" name="password" placeholder="password" id="password" defaultValue={state.password.value}
                    className={"form-control mb-1"} onBlur={onchange} />
                <span className="must_form_input">*</span>
                <InputErrors errors={password}> </InputErrors>
            </div>
            <div className="position-relative">
                <input type="text" name="display_name" placeholder="Display Name" id="display_name" defaultValue={state.display_name.value}
                    className={"form-control mb-1"} onBlur={onchange} />
                <span className="must_form_input">*</span>
                <InputErrors errors={display_name}> </InputErrors>
            </div>
        </div>
    )
}
export default StepOne;