import React, { useContext } from "react";
import "../wrap_edit_profile.css";
import AutoComplit from "../../../sing_up/sign_up_all_steps/auto_complit";
import InputErrors from "../../../validetor/input_errors";
import SignUpContext from "../../../../context/SignUp/SignUpContext";
import DataContext from "../../../../context/Data/dataContext";
import AuthContext from "../../../../context/auth/authContext";
const EditPersonalData = ({ user, setFormStatus }) => {
  // CONTEXT
  const signUpContext = useContext(SignUpContext);
  const authContext = useContext(AuthContext);
  const {
    onChangeAutoComplit,
    onchange,
    display_name,
    profession,
    city_id,
    country_id,

    headline,
    updateUserData,
  } = signUpContext;
  // data
  const dataContext = useContext(DataContext);
  const { profession: professions, countries, cities } = dataContext;
  // **

  return (
    <div className='wrap_edit_form'>
      <div className='iner_edit_box'>
        <h1 className='title lead p-2'>Edit Personal Data</h1>
        {/* INPUTS */}
        <div className='wrap_inputs'>
          {/* DISPLAY NAME */}
          <p className='m-0 pl-1 ' style={{ letterSpacing: "0.1rem" }}>
            Display Name
          </p>
          <div className='position-relative'>
            <input
              type='text'
              name='display_name'
              placeholder='Display Name'
              id='display_name'
              defaultValue={display_name.value}
              className={"form-control mb-1"}
              onBlur={(e) =>
                onchange({ name: e.target.name, value: e.target.value })
              }
            />
            <span className='must_form_input'>*</span>
            <InputErrors errors={display_name.errors}> </InputErrors>
          </div>

          {/* HEADLINE */}
          <p className='m-0 pl-1 ' style={{ letterSpacing: "0.1rem" }}>
            HeadLine
          </p>
          <div className='position-relative'>
            <input
              type='text'
              name='headline'
              placeholder='Headline'
              defaultValue={headline.value}
              className={"form-control mb-1"}
              onBlur={(e) =>
                onchange({ name: e.target.name, value: e.target.value })
              }
            />
            <span className='must_form_input'>*</span>
            <InputErrors errors={headline.errors}> </InputErrors>
          </div>

          {/* PROFESSION */}
          <p className='m-0 pl-1 ' style={{ letterSpacing: "0.1rem" }}>
            Profession
          </p>
          <AutoComplit
            wrap_form_auto_style={"100%"}
            onChangeAutoComplit={onChangeAutoComplit}
            onchange={onchange}
            stateVal={profession.value}
            dataArr={professions}
            option={"name"}
            placeholder={"Profession"}
            InputName={"profession"}
            errors={profession.errors}
          />

          {/* COUNTRIES */}
          <p className='m-0 pl-1 ' style={{ letterSpacing: "0.1rem" }}>
            Country
          </p>
          <AutoComplit
            wrap_form_auto_style={"100%"}
            onChangeAutoComplit={onChangeAutoComplit}
            onchange={onchange}
            stateVal={country_id.value}
            dataArr={countries}
            option={"name"}
            placeholder={"Country"}
            InputName={"country_id"}
            errors={country_id.errors}
          />

          {/*CITIES  */}
          <p className='m-0 pl-1 ' style={{ letterSpacing: "0.1rem" }}>
            City
          </p>
          {country_id.value && (
            <AutoComplit
              wrap_form_auto_style={"100%"}
              onChangeAutoComplit={onChangeAutoComplit}
              onchange={onchange}
              stateVal={city_id.value}
              dataArr={cities.filter(
                (item) => item["country_id"] === country_id.value
              )}
              option={"name"}
              placeholder={"City"}
              InputName={"city_id"}
              errors={city_id.errors}
            />
          )}
        </div>

        {/* OUT FORM */}
        <i
          onClick={() => setFormStatus("close")}
          id='icon_out_edit'
          className='outForm fas fa-times'
        ></i>
        <button
          className='submit_button'
          type="'button"
          onClick={() => updateUserData(authContext.user.id)}
        >
          {" "}
          Update
        </button>
      </div>
    </div>
  );
};
export default EditPersonalData;
