import React, { useState, useEffect } from "react";
import Loading from "../../loading/loading";



function SignUpError() {
    const [status, setStatus] = useState("loading");
    useEffect(() => {
        setTimeout(() => {
            setStatus("")    
        }, 2000);
        

    }, []);
    return (
        <div>
            {status ? <Loading /> :

                <div className="complite_sign_up">
                    <div className="inner_complite_sign_up">
                        <h1 className="featurette-heading">Somthing Went Wrong  Please Try Later. </h1>
                    </div>
                </div>
            }
        </div>
    )
}
export default SignUpError;