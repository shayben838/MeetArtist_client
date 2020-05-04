import React from "react";
import "./wrap_filter_row.css"

function Age({onClicFilter,wrapState}) {
    function handleInputChange({target:{name,value}}){
        onClicFilter({name,value})
    }
    return (
        <div>
            <div className="main_drop_down dropdown" >
                <button className="drop_down_button btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Age

                </button>
                <div className="dropdown-menu dropDownMenu " aria-labelledby="dropdownMenuButton">
                    <div className="wrap_ul">
                        <div className="d-flex wrap_age_inputs">
                            
                            <input className="input_age" name="minAge" onChange={handleInputChange}  defaultValue={wrapState.minAge}  placeholder="Min" />
                            
                            <input className="input_age" name="maxAge" onChange={handleInputChange} defaultValue={wrapState.maxAge} placeholder="Max" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Age;


