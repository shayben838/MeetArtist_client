import React from "react";
import mainColor from "../../style_main/style"
import "./footer.css"
function Footer() {

    return (
        <div className="mt-5 wrap_footer " style={{ textAlign: "center", background: mainColor.mainColor, height: "100px" }}>
            <p className="m-0">@All Rights Reserved To Meet Artist</p>
            <p className="m-0">Developed By Shay Ben Shimol </p>
            <a className=" m-0 link_stream mr-1" target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/shay-ben-shimol-972338196/"}>
                <i className="fab fa-linkedin fa-linkedin_shay"></i>
            </a>

        </div>
    )
}
export default Footer;