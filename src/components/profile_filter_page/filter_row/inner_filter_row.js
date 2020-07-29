import React, { useContext, Fragment } from "react";
import DataContext from "../../../context/Data/dataContext";
import "./wrap_filter_row.css";
import DropDown from "./drop_down";
import Age from "./age_filter";

const InnerFilterRow = () => {
  const dataContext = useContext(DataContext);
  const {
    setFilter,
    users,
    cities,
    sub_genre,
    genre,
    profession,
    countries,
    minAge,
    maxAge,
    clearFilter,
  } = dataContext;

  return (
    <Fragment>
      <nav className='navbar navbar-expand-xl nav_filter '>
        <button
          className='navbar-toggler bg-dark  navbar-dark'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <i className='filter_icon fas fa-filter'></i>
        </button>
        <div className='mt-2 collapse navbar-collapse ' id='navbarNav'>
          <ul className='navbar-nav'>
            {/* GENRE */}
            <DropDown
              stateVal={"Genre"}
              stateName={"genre"}
              option={"name"}
              buttonName={"Genre"}
              dataArr={genre}
            />
            {/* SUB GENRE */}
            <DropDown
              stateVal={"Sub Genre"}
              stateName={"sub_genre"}
              option={"sub_name"}
              buttonName={"Sub Genre"}
              dataArr={sub_genre}
            />
            {/* PROFESSION */}
            <DropDown
              stateVal={"Profession"}
              stateName={"profession"}
              option={"name"}
              buttonName={"Profession"}
              dataArr={profession}
            />
            {/* AGE */}
            <Age onClickFilter={setFilter} minAge={minAge} maxAge={maxAge} />
            {/* COUNTRIES */}
            <DropDown
              stateVal={"Country"}
              // stateVal={wrapState.country.name}
              stateName={"country"}
              option={"name"}
              buttonName={"Country"}
              dataArr={countries}
            />
            {/* CITY */}
            <DropDown
              stateVal={"City"}
              stateName={"city"}
              option={"name"}
              buttonName={"City"}
              dataArr={cities}
            />
            {/* DISPLAY NAME */}
            <DropDown
              stateVal={"Name"}
              stateName={"display_name"}
              option={"display_name"}
              buttonName={"Name"}
              dataArr={users}
            />
            <button
              style={{ textAlign: "center", color: "chartreuse" }}
              className=' drop_down_button btn btn-secondary '
              type='button'
              onClick={() => clearFilter()}
            >
              {" "}
              RESET
            </button>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};
export default InnerFilterRow;
