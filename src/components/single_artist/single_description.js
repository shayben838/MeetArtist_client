import React from "react";
import mainColor from "../../style_main/style";
import "./wrap_single_artist.css";

function SingleDescription({ singleData, name }) {
  return (
    <div className='row m-0 pl-2 ml-1'>
      <span
        className=' headline mb-1 '
        style={{
          textTransform: "capitalize",
        }}
      >
        {" "}
        {name}{" "}
      </span>
      <span className='headline ' style={{ color: `${mainColor.mainColor}` }}>
        : &nbsp; {singleData}
      </span>
    </div>
  );
}
export default SingleDescription;
