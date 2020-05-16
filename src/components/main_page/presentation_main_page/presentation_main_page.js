import React from "react"
import PresentationImage from "./presentation_image"
import PresentationText from "./presentation_text"

const TextPresentationTop = {firstHeading:"Meet Artist.", textMuted:"The place where musical collaborations are created.",lead:"Sign up today and connect to thousands of producers and the people behind the Music industry . With the help of a special filter engine you have the ability to search for people by means of significant parameters." }
const TextPresentationBottom = {firstHeading:"Meet Artist.", textMuted:"Your place to ask professional questions about your production.",lead:"On our website you can send messages to people about your questions. You can find artists close to  your live area by our filtration system and create music with them TODAY! " }


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