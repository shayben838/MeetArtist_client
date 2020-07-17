import React from "react";
import { Link } from "react-router-dom";
import StepOne from "./sign_up_all_steps/step1";
import StepTwo from "./sign_up_all_steps/step_3";
import StepThree from "./sign_up_all_steps/step_4";
import StepFour from "./sign_up_all_steps/step_5";
import StepFive from "./sign_up_all_steps/step_6";

function InnerWrapSignUP({
  dataAPI,
  onFilechange,
  onchange,
  state,
  changeStatus,
  registerAPI,
  onChangeAutoComplit,
}) {
  let status = state.status;
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
            Step: {state.status}
            {"/4"}
          </h6>
        </div>

        {/* FORM STEPS SIGN UP */}
        <div className='wrap_form_sign_up'>
          <div id='regForm' action=''>
            {/* STEP 1 */}
            {status === 1 && (
              <StepOne
                state={state}
                onchange={onchange}
                display_name={state.display_name.errors}
                email={state.email.errors}
                password={state.password.errors}
              />
            )}
            {/* STEP 2 */}
            {status === 2 && (
              <StepTwo
                dataAPI={dataAPI}
                state={state}
                onchange={onchange}
                age={state.age.errors}
                city_id={state.city_id.errors}
                country_id={state.country_id.errors}
                onChangeAutoComplit={onChangeAutoComplit}
              />
            )}
            {/* STEP 3 */}
            {status === 3 && (
              <StepThree
                state={state}
                onchange={onchange}
                dataAPI={dataAPI}
                onChangeAutoComplit={onChangeAutoComplit}
                profession={state.profession.errors}
                studio={state.studio.errors}
                genre={state.genre.errors}
                sub_genre={state.sub_genre.errors}
                booking={state.booking.errors}
                sound_cloud={state.sound_cloud.errors}
                you_tube={state.you_tube.errors}
              />
            )}
            {/* STEP 4 */}
            {status === 4 && (
              <StepFour
                state={state}
                onchange={onchange}
                onFilechange={onFilechange}
                headline={state.headline.errors}
                main_image={state.main_image}
              />
            )}

            {/* STEP 5 */}
            {status === 5 && <StepFive registerAPI={registerAPI} />}
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
              {state.status !== 6 && (
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
}

export default InnerWrapSignUP;
