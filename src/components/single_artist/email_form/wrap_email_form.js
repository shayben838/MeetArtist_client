import React from "react";
// import React, { useLayoutEffect, useState } from "react";

import "./emai_form.css"
import EmailForm from "./email_form";

// check the size of the window for hide or show the email form not in use in the project just for testing.
// function useWindowSize() {
//     const [size, setSize] = useState([0, 0]);
//     useLayoutEffect(() => {
//         function updateSize() {
//             setSize([window.innerWidth, window.innerHeight]);
//         }
//         window.addEventListener("resize", updateSize);
//         updateSize();
//         return () => window.removeEventListener("resize", updateSize);
//     }, []);
//     return size
// }


function WrapEmailForm({ closeEmailForm, user,userLoged }) {
    // const [width, height] = useWindowSize();

    return (
        
            <EmailForm userLoged={userLoged} user={user} closeEmailForm={closeEmailForm} />
        
    )
}

export default WrapEmailForm;