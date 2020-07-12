import React from "react";
import "./loading.css";
import style from "../../style_main/style";

function LoadingHome() {
  return (
    <div>
      <div className='wrap_loader' style={{ background: style.mainColor }}>
        <h1 className='lead loader_text' id='top'>
          Welcome To Meet Artist
        </h1>

        <h1 className='lead loader_text' id='bottom'>
          The place where musical collaborations are created.
        </h1>

        <div className='loader' style={{ color: style.secondColor }}>
          Loading...
        </div>
      </div>
    </div>
  );
}
export default LoadingHome;
