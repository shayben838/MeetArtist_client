import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import StepOne from "./sign_up_all_steps/step1";
import StepTwo from "./sign_up_all_steps/step_3";
import StepThree from "./sign_up_all_steps/step_4";
import StepFour from "./sign_up_all_steps/step_5";
import StepFive from "./sign_up_all_steps/step_6";
import SignUpContext from "../../context/SignUp/SignUpContext";

const InnerWrapSignUP = () => {
  // NEW CONTEXT
  const signUpState = useContext(SignUpContext);
  const { changeStatus, registerAPI, status, stateInit } = signUpState;
  useEffect(() => {
    stateInit();
  }, []);
  //
  return (
    <div style={{ minHeight: "calc(100vh - 210px)" }}>
      <div className='wrap_sign_up_form' style={{ zIndex: "11" }}>
        <Link to='/'>
          <i className='outForm fas fa-times'></i>
        </Link>
        <div className='wrap_heading_sing_up'>
          <i className=' mb-2 fas fa-headphones'></i>
          <h2
            className='featurette-heading mt-3'
            style={{ letterSpacing: "0.5rem" }}
          >
            Register{" "}
          </h2>
          <h6 className='lead' style={{ letterSpacing: "0.5rem" }}>
            Step: {status}
            {"/4"}
          </h6>
        </div>

        {/* FORM STEPS SIGN UP */}
        <div className='wrap_form_sign_up'>
          <div id='regForm' action=''>
            {/* STEP 1 */}
            {status === 1 && <StepOne />}
            {/* STEP 2 */}
            {status === 2 && <StepTwo />}
            {/* STEP 3 */}
            {status === 3 && <StepThree />}
            {/* STEP 4 */}
            {/* {status === 4 && (
              <StepFour
                state={state}
                onchange={onchange}
                onFilechange={onFilechange}
                headline={state.headline.errors}
                main_image={state.main_image}
              />
            )} */}

            {/* STEP 4 */}
            {status === 4 && <StepFive />}
          </div>

          <div className='wrap_buttons'>
            <div>
              <button
                className='button_sign_up'
                type='button'
                id='prevBtn'
                onClick={() => changeStatus("Previous")}
              >
                <i className='fas fa-backward'></i>
              </button>
              {status !== 4 && (
                <button
                  className='button_sign_up'
                  type='button'
                  id='nextBtn'
                  onClick={() => changeStatus("Next")}
                >
                  <i className='fas fa-forward'></i>
                </button>
              )}
            </div>
          </div>
          <div className='' style={{ textAlign: "center" }}>
            <p className='mt-5 mb-0 text-muted'>© 2019-2020</p>
            <p className='m-0 lead text-muted'> Meet Artist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerWrapSignUP;
