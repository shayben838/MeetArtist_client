import React from "react";
import "../carousel_main_page/carousel_main_page.css";
import CardArtist from "../../card_artist/card_artist";
import { Link } from "react-router-dom";
const styleCard = { wrap: "col-lg-4 mb-3", inner: "card ml-auto mr-auto" };

function GalleryMainPage({ users }) {
  return (
    <div className='container mt-5 mb-5'>
      <div className='row m-0 d-block d-lg-flex justify-content-lg-between '>
        <div className='container ml-4'>
          <Link to='/search' className='click_here '>
            <h6 className='lead'>
              {users.length} Artists Aleray Connect, Click Here!{" "}
            </h6>
          </Link>
        </div>
        {users.slice(0, 3).map((user) => (
          <CardArtist styleCard={styleCard} user={user} key={user.id} />
        ))}
      </div>
      <hr className='featurette-divider'></hr>
    </div>
  );
}
export default GalleryMainPage;
