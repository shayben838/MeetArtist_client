import React, { useState } from "react";
import InputErrors from "../../validetor/input_errors";
import "./auto_complete_sign_up.css";

function AutoComplit({
  optionType,
  wrap_form_auto_style,
  InputName,
  onChangeAutoComplit,
  dataArr,
  option,
  stateVal,
  placeholder,
  errors,
}) {
  // INIT
  const [autoComplite, setAutoComplite] = useState(dataArr);
  let data = dataArr;
  let inputValue = stateVal;

  // AUTO COMPLETE
  const onInputChange = ({ target: { name, value } }) => {
    let len = value.length;
    const newData = data.filter(
      (item) => item[option].slice(0, len).toLowerCase() === value.toLowerCase()
    );
    setAutoComplite(newData);
  };
  if (typeof stateVal === "number") {
    let name = dataArr.filter((item) => item.id === stateVal)[0][option];
    inputValue = name;
  }

  return (
    <div>
      <div
        className='wrap_form_auto'
        style={{ width: `${wrap_form_auto_style}` }}
      >
        <div className='wrap_input_auto position-relative'>
          <input
            key={inputValue ? "notLoadedYet" : "loaded"}
            type='text'
            name={InputName}
            placeholder={placeholder}
            id={InputName}
            defaultValue={inputValue}
            className={"form-control mb-1"}
            onBlur={() => onChangeAutoComplit(InputName, "")}
            autoComplete='off'
            onChange={onInputChange}
          />
          <i
            onClick={() => onChangeAutoComplit(InputName, "")}
            className='delete_input_value_button fas fa-times'
            aria-hidden='true'
          >
            {" "}
          </i>
          <span className='must_form_input'>*</span>
        </div>
        {!stateVal && (
          <div className='wrap_auto_buttons'>
            {autoComplite.map((item, key) => (
              <button
                type='button'
                onClick={() => onChangeAutoComplit(InputName, item.id)}
                className={optionType}
                id={item.id}
                value={item[option]}
                key={key}
              >
                <i className='fas fa-search'></i> {item[option]}{" "}
              </button>
            ))}
          </div>
        )}
      </div>
      <InputErrors errors={errors}> </InputErrors>
    </div>
  );
}
export default AutoComplit;
