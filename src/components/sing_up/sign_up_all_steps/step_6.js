import React from "react";



function StepFive({ registerAPI }) {
    return (
        <div>
            <div className="complite_sign_up">
                <div className="inner_complite_sign_up">
                    <h1 className="featurette-heading">Thanks for signing up. </h1>
                    <button className="featurette-heading   ml-2 registerAPI_button" onClick={registerAPI}>   MEET <p className="m-0"></p>THE ARTIST NOW!</button>
                </div>
            </div>

        </div>
    )
}
export default StepFive;