import React, { useState, useContext } from "react";
import { Redirect } from "react-router";

import "../wrap_edit_profile.css";
import AutoComplit from "../../../sing_up/sign_up_all_steps/auto_complit";
import InputErrors from "../../../validetor/input_errors";
import SignUpContext from "../../../../context/SignUp/SignUpContext";
import DataContext from "../../../../context/Data/dataContext";
import AuthContext from "../../../../context/auth/authContext";
function EditPersonalData({ user, setFormStatus }) {
  // CONTEXT
  const signUpContext = useContext(SignUpContext);
  const authContext = useContext(AuthContext);
  console.log(signUpContext);
  const {
    onChangeAutoComplit,
    onchange,

    age,
    studio: studio_user,
    booking: booking_user,
    genre: genre_id_user,
    sub_genre: sub_genre_id_user,
    updateUserData,
  } = signUpContext;
  console.log(studio_user);
  // data
  const dataContext = useContext(DataContext);
  const {
    profession: professions,
    genre: genres,
    sub_genre: sub_genres,
    countries,
    cities,
  } = dataContext;
  const [loading, setLoading] = useState("");
  const [changeData, setChangeData] = useState("");

  const temporeryStudioArr = [
    { id: 1, name: "Home Studio" },
    { id: 2, name: "Rent Studio" },
    { id: 3, name: "Professional Studio" },
  ];
  const temporeryBookingArr = [
    { id: 1, name: "Have Booking" },
    { id: 2, name: "Not Have Booking" },
  ];

  let booking;
  let genre_id;
  let sub_genre_id;
  let studio;
  if (booking_user.value) {
    booking = parseInt(booking_user.value);
  }
  if (genre_id_user.value) {
    genre_id = parseInt(genre_id_user.value);
  }
  if (sub_genre_id_user.value) {
    sub_genre_id = parseInt(sub_genre_id_user.value);
  }
  if (studio_user.value) {
    studio = parseInt(studio_user.value);
  }
  return (
    <div className='wrap_edit_form'>
      {changeData && <Redirect to={`/singleArtist/${user.id}`} />}

      {loading ? (
        <loading />
      ) : (
        <div className='iner_edit_box'>
          <h1 className='title lead p-2'>Edit Profession </h1>
          {/* INPUTS */}
          <div className='wrap_inputs'>
            {/* AGE */}
            <p className='m-0 pl-1 ' style={{ letterSpacing: "0.1rem" }}>
              Age
            </p>
            <div className='position-relative'>
              <input
                type='text'
                name='age'
                placeholder='Age'
                defaultValue={age.value}
                className={"form-control mb-1"}
                onBlur={(e) =>
                  onchange({ name: e.target.name, value: e.target.value })
                }
              />
              <span className='must_form_input'>*</span>
              <InputErrors errors={age.errors}> </InputErrors>
            </div>

            {/* BOOKING */}
            <p className='m-0 pl-1 ' style={{ letterSpacing: "0.1rem" }}>
              Booking
            </p>
            <AutoComplit
              wrap_form_auto_style={"100%"}
              onChangeAutoComplit={onChangeAutoComplit}
              onchange={onchange}
              stateVal={booking}
              dataArr={temporeryBookingArr}
              option={"name"}
              placeholder={"Have Booking?"}
              InputName={"booking"}
              errors={booking_user.errors}
            />
            {/* GENRE */}
            <p className='m-0 pl-1 ' style={{ letterSpacing: "0.1rem" }}>
              Genre
            </p>
            <AutoComplit
              wrap_form_auto_style={"100%"}
              onChangeAutoComplit={onChangeAutoComplit}
              onchange={onchange}
              stateVal={genre_id}
              dataArr={genres}
              option={"name"}
              placeholder={"Genre"}
              InputName={"genre_id"}
              errors={genre_id_user.errors}
            />
            {/* SUB GENRE */}
            <p className='m-0 pl-1 ' style={{ letterSpacing: "0.1rem" }}>
              Sub Genre
            </p>
            {genre_id_user.value && (
              <AutoComplit
                wrap_form_auto_style={"100%"}
                onChangeAutoComplit={onChangeAutoComplit}
                onchange={onchange}
                stateVal={sub_genre_id}
                dataArr={sub_genres.filter(
                  (item) => item["genre_id"] === parseInt(genre_id)
                )}
                option={"sub_name"}
                placeholder={"Sub Genre"}
                InputName={"sub_genre_id"}
                errors={sub_genre_id_user.errors}
              />
            )}
            {/* STUDIO */}
            <p className='m-0 pl-1 ' style={{ letterSpacing: "0.1rem" }}>
              Studio
            </p>
            <AutoComplit
              wrap_form_auto_style={"100%"}
              onChangeAutoComplit={onChangeAutoComplit}
              onchange={onchange}
              stateVal={studio}
              dataArr={temporeryStudioArr}
              option={"name"}
              placeholder={"Studio"}
              InputName={"studio"}
              errors={studio_user.errors}
            />
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
      )}
    </div>
  );
}
export default EditPersonalData;
