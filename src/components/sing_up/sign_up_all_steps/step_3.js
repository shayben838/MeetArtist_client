import React, { useContext } from "react";
import InputErrors from "../../validetor/input_errors";

import AutoComplit from "./auto_complit";
import "./auto_complete_sign_up.css";
import "../sign_up.css";
import SignUpContext from "../../../context/SignUp/SignUpContext";
import DataContext from "../../../context/Data/dataContext";
const StepTwo = () => {
  const dataContext = useContext(DataContext);
  const { countries, cities } = dataContext;
  const signUpContext = useContext(SignUpContext);
  const {
    onchange,
    age,
    city_id,
    country_id,
    onChangeAutoComplit,
  } = signUpContext;

  return (
    <div>
      {/* AGE */}
      <div className='position-relative'>
        <input
          type='text'
          name={"age"}
          placeholder={"Age"}
          id={"age"}
          defaultValue={age.value}
          className={"form-control mb-1"}
          onBlur={(e) =>
            onchange({ name: e.target.name, value: e.target.value })
          }
        />
        <span className='must_form_input'>*</span>
        <InputErrors errors={age.errors}> </InputErrors>
      </div>

      {/* COUNTRIES */}
      <AutoComplit
        optionType='button_drop_down_sign_up'
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
      {country_id.value && (
        <AutoComplit
          optionType='button_drop_down_sign_up'
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
  );
};
export default StepTwo;
