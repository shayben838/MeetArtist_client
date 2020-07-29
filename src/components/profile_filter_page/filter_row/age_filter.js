import React from "react";
import "./wrap_filter_row.css";

const Age = ({ onClickFilter, minAge, maxAge }) => {
  return (
    <div>
      <div className='main_drop_down dropdown'>
        <button
          className='drop_down_button btn btn-secondary dropdown-toggle'
          type='button'
          id='dropdownMenuButton'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          Age
        </button>
        <div
          className='dropdown-menu dropDownMenu '
          aria-labelledby='dropdownMenuButton'
        >
          <div className='wrap_ul'>
            <div className='d-flex wrap_age_inputs'>
              <input
                className='input_age'
                name='minAge'
                onChange={(e) => onClickFilter("minAge", e.target.value)}
                defaultValue={minAge}
                placeholder='Min'
              />

              <input
                className='input_age'
                name='maxAge'
                onChange={(e) => onClickFilter("maxAge", e.target.value)}
                defaultValue={maxAge}
                placeholder='Max'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Age;
