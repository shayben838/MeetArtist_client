import React, { useContext, useState } from "react";
import "./wrap_filter_row.css";
import DataContext from "../../../context/Data/dataContext";

function DropDown({ buttonName, dataArr, option, stateName }) {
  //
  // AUTO COMPLITE MANUAL
  const dataContext = useContext(DataContext);
  const { setFilter, filterBy } = dataContext;
  const [autoComplite, setAutoComplite] = useState(dataArr);
  //
  let data = dataArr;
  const onInputChange = ({ target: { name, value } }) => {
    let len = value.length;
    const newData = data.filter(
      (item) => item[option].slice(0, len).toLowerCase() === value.toLowerCase()
    );
    setAutoComplite(newData);
  };
  //
  let state_value;
  if (filterBy[stateName]) {
    state_value = dataArr.filter(
      (item) => item.id === parseInt(filterBy[stateName])
    )[0];
  }

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
          {state_value ? state_value[option] : buttonName}
        </button>
        <div
          className='dropdown-menu dropDownMenu '
          aria-labelledby='dropdownMenuButton'
        >
          <div className='wrap_ul'>
            <div className='wrap_input'>
              <input
                className='input_drop_down'
                placeholder={buttonName}
                name={buttonName}
                type='text'
                onChange={onInputChange}
                autoComplete='off'
              />
            </div>
            <div className=''>
              <button
                className='button_drop_down d-block'
                onClick={() => setFilter(stateName, "")}
              >
                <i className='fas fa-search'></i> All{" "}
              </button>
              <div className='wrap_auto_buttons'>
                {autoComplite.map((item, key) => (
                  <button
                    onClick={() => setFilter(stateName, item.id)}
                    className='button_drop_down d-block'
                    id={item.id}
                    value={item[option]}
                    key={key}
                  >
                    <i className='fas fa-search'></i> {item[option]}{" "}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DropDown;
