import React, { useContext } from "react";
import InputErrors from "../../validetor/input_errors";
import AutoComplit from "./auto_complit";
import SignUpContext from "../../../context/SignUp/SignUpContext";
import DataContext from "../../../context/Data/dataContext";

const StepThree = () => {
  const dataContext = useContext(DataContext);
  const {
    profession: professions,
    genre: genres,
    sub_genre: sub_genres,
  } = dataContext;
  const signUpContext = useContext(SignUpContext);
  const {
    onchange,
    sound_cloud,
    you_tube,
    booking,
    profession,
    genre,
    sub_genre,
    studio,
    onChangeAutoComplit,
  } = signUpContext;

  const temporeryStudioArr = [
    { id: 1, name: "Home Studio" },
    { id: 2, name: "Rent Studio" },
    { id: 3, name: "Professional Studio" },
  ];
  const temporeryBookingArr = [
    { id: 1, name: "Have Booking" },
    { id: 2, name: "Not Have Booking" },
  ];
  return (
    <div>
      {/*  */}
      <div className='position-relative'>
        <input
          type='text'
          name={"sound_cloud"}
          placeholder={"Sound Cloud"}
          id={"sound_cloud"}
          defaultValue={sound_cloud.value}
          className={"form-control mb-1"}
          onBlur={(e) =>
            onchange({ name: e.target.name, value: e.target.value })
          }
        />
        <span className='must_form_input'>*</span>
        <InputErrors errors={sound_cloud.errors}> </InputErrors>
      </div>

      <div className='position-relative'>
        <input
          type='text'
          name={"you_tube"}
          placeholder={"You Tube"}
          id={"you_tube"}
          defaultValue={you_tube.value}
          className={"form-control mb-1"}
          onBlur={(e) =>
            onchange({ name: e.target.name, value: e.target.value })
          }
        />
        <span className='must_form_input'>*</span>
        <InputErrors errors={you_tube.errors}> </InputErrors>
      </div>
      {/*  */}

      {/* BOOKING */}
      <AutoComplit
        optionType='button_drop_down_sign_up'
        onChangeAutoComplit={onChangeAutoComplit}
        onchange={onchange}
        stateVal={booking.value}
        dataArr={temporeryBookingArr}
        option={"name"}
        placeholder={"Have Booking?"}
        InputName={"booking"}
        errors={booking.errors}
      />
      {/* PROFESSION */}
      {booking.value && (
        <AutoComplit
          optionType='button_drop_down_sign_up'
          onChangeAutoComplit={onChangeAutoComplit}
          onchange={onchange}
          stateVal={profession.value}
          dataArr={professions}
          option={"name"}
          placeholder={"Profession"}
          InputName={"profession"}
          errors={profession.errors}
        />
      )}
      {/* GENRE */}
      {profession.value && (
        <AutoComplit
          optionType='button_drop_down_sign_up'
          onChangeAutoComplit={onChangeAutoComplit}
          onchange={onchange}
          stateVal={genre.value}
          dataArr={genres}
          option={"name"}
          placeholder={"Genre"}
          InputName={"genre"}
          errors={genre.errors}
        />
      )}
      {/* SUB GENRE */}
      {genre.value && (
        <AutoComplit
          optionType='button_drop_down_sign_up'
          onChangeAutoComplit={onChangeAutoComplit}
          onchange={onchange}
          stateVal={sub_genre.value}
          dataArr={sub_genres.filter(
            (item) => item["genre_id"] === genre.value
          )}
          option={"sub_name"}
          placeholder={"Sub Genre"}
          InputName={"sub_genre"}
          errors={sub_genre.errors}
        />
      )}
      {/* STUDIO */}
      {sub_genre.value && (
        <AutoComplit
          optionType='button_drop_down_sign_up'
          onChangeAutoComplit={onChangeAutoComplit}
          onchange={onchange}
          stateVal={studio.value}
          dataArr={temporeryStudioArr}
          option={"name"}
          placeholder={"Studio"}
          InputName={"studio"}
          errors={studio.errors}
        />
      )}
    </div>
  );
};
export default StepThree;
