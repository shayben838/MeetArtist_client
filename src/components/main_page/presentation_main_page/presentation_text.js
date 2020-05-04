import React from "react"
import "./presentation.css"
function PresentationText({ position,text }) {
    return (
        <div className="col-md-7 mt-5">
            <h2 className="featurette-heading">{text.firstHeading}
                <span className="text-muted">{text.textMuted}</span>
            </h2>
            <p className="lead">{text.lead}</p>
        </div>
    )
}
export default PresentationText;
