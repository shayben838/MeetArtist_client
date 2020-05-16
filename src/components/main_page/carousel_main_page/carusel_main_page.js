import React from "react";
import "./carousel_main_page.css"

function CaruselMainPage() {
  return (
    <div className="wrap_carousel">
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" style={{ zIndex: "8" }}>
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1" ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" >
            <div className={"firstImage wrap_main_image "}></div>
            <div className="carousel-caption d-none d-md-block pb-5">
              <h5 style={{ fontSize: "30px", letterSpacing: ".6rem" }}>Meet Artist</h5>
              <p style={{ fontSize: "20px", letterSpacing: ".6rem" }}>The Place for Music Artists.</p>
            </div>
          </div>
          <div className="carousel-item" >
            <div className={"secondImage  wrap_main_image"}></div>
            <div className="carousel-caption d-none d-md-block pb-5">
              <h5 style={{ fontSize: "30px", letterSpacing: ".6rem" }}>Meet Artist</h5>
              <p style={{ fontSize: "20px", letterSpacing: ".6rem" }}>The place where musical ties are created.</p>
            </div>
          </div>
          <div className="carousel-item" >
            <div className={"thirdImage wrap_main_image "}></div>
            <div className="carousel-caption d-none d-md-block pb-5">
              <h5 style={{ fontSize: "30px", letterSpacing: ".6rem" }}>Meet Artist</h5>
              <p style={{ fontSize: "20px", letterSpacing: ".6rem" }}>Find an artist and create music Today together!</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}
export default CaruselMainPage;