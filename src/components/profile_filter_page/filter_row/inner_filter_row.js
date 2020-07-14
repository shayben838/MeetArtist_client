import React from "react";
import "./wrap_filter_row.css";
import DropDown from "./drop_down";
import Age from "./age_filter";

function InnerFilterRow({
  dataAPI,
  usersFilterd,
  resetFilter,
  onClicFilter,
  wrapState,
}) {
  return (
    <nav className='navbar navbar-expand-xl nav_filter '>
      {/* <a className="navbar-brand" href="#">Filter</a> */}
      <button
        className='navbar-toggler bg-dark  navbar-dark'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        {/* <span className="navbar-toggler-icon"></span> */}
        <i className='filter_icon fas fa-filter'></i>
      </button>
      <div className='mt-2 collapse navbar-collapse ' id='navbarNav'>
        <ul className='navbar-nav'>
          {/* GENRE */}
          <DropDown
            onClicFilter={onClicFilter}
            stateVal={wrapState.genre.name}
            stateName={"genre"}
            option={"name"}
            dataAPI={dataAPI}
            buttonName={"Genre"}
            dataArr={dataAPI.genre}
          />
          {/* SUB GENRE */}
          <DropDown
            onClicFilter={onClicFilter}
            stateVal={wrapState.sub_genre.name}
            stateName={"sub_genre"}
            option={"sub_name"}
            dataAPI={dataAPI}
            buttonName={"Sub Genre"}
            dataArr={dataAPI.sub_genre}
          />
          {/* PROFESSION */}
          <DropDown
            onClicFilter={onClicFilter}
            stateVal={wrapState.profession.name}
            stateName={"profession"}
            option={"name"}
            dataAPI={dataAPI}
            buttonName={"Profession"}
            dataArr={dataAPI.profession}
          />
          {/* AGE */}
          <Age onClicFilter={onClicFilter} wrapState={wrapState} />
          {/* COUNTRIES */}
          <DropDown
            onClicFilter={onClicFilter}
            stateVal={wrapState.country.name}
            stateName={"country"}
            option={"name"}
            dataAPI={dataAPI}
            buttonName={"Country"}
            dataArr={dataAPI.countries}
          />
          {/* CITY */}
          <DropDown
            onClicFilter={onClicFilter}
            stateVal={wrapState.city.name}
            stateName={"city"}
            option={"name"}
            dataAPI={dataAPI}
            buttonName={"City"}
            dataArr={dataAPI.cities}
          />
          {/* DISPLAY NAME */}
          <DropDown
            onClicFilter={onClicFilter}
            stateVal={wrapState.display_name.name}
            stateName={"display_name"}
            option={"display_name"}
            dataAPI={dataAPI}
            buttonName={"Name"}
            dataArr={usersFilterd}
          />
          <button
            style={{ textAlign: "center", color: "chartreuse" }}
            className=' drop_down_button btn btn-secondary '
            type='button'
            onClick={resetFilter}
          >
            {" "}
            RESET
          </button>
        </ul>
      </div>
    </nav>
  );
}
export default InnerFilterRow;
