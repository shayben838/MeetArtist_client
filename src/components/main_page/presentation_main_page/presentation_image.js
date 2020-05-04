import React from "react"
import bootom from "../images/bootom.jpeg"
import top from "../images/top.jpg"
function PresentationImage({position}) {
    return (
                <div className="col-md-5">
                    {position === "top" ? 
                    <img className="featurette-image img-fluid mx-auto" 
                    data-src="holder.js/500x500/auto" alt="500x500"
                        style={{ width: "400px", height: "400px" }}
                         data-holder-rendered="true" src={top}/>
                    : <img className="featurette-image img-fluid mx-auto" 
                    data-src="holder.js/500x500/auto" alt="500x500"
                        style={{ width: "400px", height: "400px" }}
                         data-holder-rendered="true" src={bootom}/>}
                    
                </div>
    )
}
export default PresentationImage;
