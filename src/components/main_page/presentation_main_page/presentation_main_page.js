import React from "react"
import PresentationImage from "./presentation_image"
import PresentationText from "./presentation_text"

const TextPresentationTop = {firstHeading:"TOP First featurette heading.", textMuted:"TOP It'll blow your mind.",lead:"BOTTOM Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo." }
const TextPresentationBottom = {firstHeading:"BOTTOM First featurette heading.", textMuted:"BOTTOM It'll blow your mind.",lead:"BOTTOM Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo." }


function Presentation({ ImagePosition }) {
    return (
        <div className="container">
            <div className="">
                {ImagePosition === "right" ?
                    <div className="row featurette m-0">
                        <PresentationText position="top" text={TextPresentationTop}/>
                        <PresentationImage position="top"/>
                         </div> :
                    <div className="row featurette m-0">
                        <PresentationImage position="bottom"/>
                        <PresentationText position="bottom" text={TextPresentationBottom}/>
                    </div>
                }

            </div>
        </div>
    )
}
export default Presentation;