import React, { useContext } from "react";
import CardArtist from "../../card_artist/card_artist";
import DataContext from "../../../context/Data/dataContext"

const GalleryProfil = () => {
  const dataContext = useContext(DataContext);
  return (
    <div className="wrap_cards" >
      <div className="row m-0 " >

        {dataContext.usersFilterd.map((user) => <CardArtist user={user} key={user.id} />)}


      </div>
    </div>

  );

}

export default GalleryProfil