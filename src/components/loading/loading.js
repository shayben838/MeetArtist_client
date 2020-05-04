import React from "react";
import "./loading.css"
import style from "../../style_main/style"

function Loading() {
    return (
        <div className="wrap_loader" style={{background:style.mainColor}}>
            <div className="loader" style={{color:style.secondColor}}>Loading...</div>
        </div>
    )
}
export default Loading;