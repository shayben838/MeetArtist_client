import React from "react";
import "./wrap_single_artist.css";
import SingleDescription from "./single_description";

function MemberDescription({ user, dataAPI }) {
  const temporeryStudioArr = [
    { id: 1, name: "Home Studio" },
    { id: 2, name: "Rent Studio" },
    { id: 3, name: "Professional Studio" },
  ];
  const temporeryBookingArr = [
    { id: 1, name: "Have Booking" },
    { id: 2, name: "Not Have Booking" },
  ];

  const profession = dataAPI.profession.filter(
    (item) => item.id === user.professions
  )[0].name;
  const country = dataAPI.countries
    .filter((item) => item.id === user.country_id)[0]
    .name.toUpperCase();
  const city = dataAPI.cities.filter((item) => item.id === user.city_id)[0]
    .name;
  const genre = dataAPI.genre.filter(
    (item) => item.id + "" === user.genre_id
  )[0].name;
  const sub_genre = dataAPI.sub_genre.filter(
    (item) => item.id + "" === user.sub_genre_id
  )[0].sub_name;

  const booking = temporeryBookingArr.filter(
    (item) => item.id + "" === user.booking
  )[0].name;
  const studio = temporeryStudioArr.filter(
    (item) => item.id + "" === user.studio
  )[0].name;
  return (
    <div className='wrap_member_description row m-0 '>
      <div className='col-12  '>
        <h3
          className=' featurette-heading mt-4 mb-1    pl-3 pt-1 ml-1'
          style={{ textTransform: "capitalize" }}
        >
          {user.display_name}
        </h3>
        <p
          className='m-0  pl-2 pl-3  ml-1'
          style={{ textTransform: "capitalize" }}
        >
          {" "}
          {`"${user.headline}"`}
        </p>
        <p
          className='m-0 pl-2  pl-3 ml-1 lead'
          style={{ textTransform: "capitalize" }}
        >
          {profession}
        </p>
        <p className='m-0  pl-2  pl-3 ml-1 '>{country}</p>
        <p className='m-0  pl-2   pl-3 ml-1'>{city}</p>
      </div>
      <div className='col-12   mt-0 mt-md-4 mb-0 pt-2  pr-5 position-relative'>
        <div className='details_box  mr-md-5'>
          <SingleDescription singleData={user.age} name={"Age"} />
          <SingleDescription singleData={booking} name={"Booking"} />
          <SingleDescription singleData={genre} name={"Genre"} />
          <SingleDescription singleData={sub_genre} name={"Sub Genre"} />
          <SingleDescription singleData={studio} name={"Studio"} />
        </div>
      </div>
    </div>
  );
}
export default MemberDescription;
