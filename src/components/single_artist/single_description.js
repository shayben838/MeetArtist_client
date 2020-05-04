import React from "react";
import mainColor from "../../style_main/style"
import "./wrap_single_artist.css"

function SingleDescription({ singleData ,name}) {
    return (
            <div className="row m-0 pl-2 ml-1">
                 <span className=" headline mb-1 " style={{borderBottom:"1px solid #a1a1a1",textTransform:"capitalize",fontWeight:"bold"}}> {name}   </span>
                 <span className="headline " style={{ color: `${mainColor.mainColor}` }}>: &nbsp; {singleData}</span>
             </div>
    )
}
export default SingleDescription;