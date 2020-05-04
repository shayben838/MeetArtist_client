// import React, { useState } from "react";
// import InputErrors from "../../validetor/input_errors"

// function DependAutoComplit({ dependOn, dependOnName, dependOnVal, onchange, InputName, onChangeAutoComplit, dataArr, option, stateVal, stateName, onClicFilter, dataAPI, placeholder, state, errors }) {
// //  INIT
//     const [dependAutoComplite, setDependAutoComplite] = useState(dataArr);
//     let data = dataArr

// // AUTO COMPLETE 
//     const onInputChange = ({ target: { name, value } }) => {
//         let len = value.length;
//         const newData = data.filter(item => item[option].slice(0, len).toLowerCase() === value.toLowerCase())
//         setDependAutoComplite(newData);
//     }


//     return (
//         <div>
//             <div className="wrap_ul">
//                 <div className="wrap_input">
//                     <input type="text" name={InputName} placeholder={placeholder} id={InputName} defaultValue={state[stateName].value}
//                         className={"form-control mb-1"} onBlur={onchange} autocomplete="off" onChange={onInputChange} />
//                 </div>
//                 <div>
//                     {dependAutoComplite.map((item, key) =>
//                         <button style={{ color: "black" }} type="button" onClick={() => onChangeAutoComplit(stateName, item.id)} className="button_drop_down d-block" id={item.id} value={item[option]} key={key}><i class="fas fa-search"></i> {item[option]} </button>)}
//                 </div>
//             </div>
//             <InputErrors errors={errors}> </InputErrors>
//         </div>
//     )
// }
// export default DependAutoComplit;